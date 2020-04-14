import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';

import CurrentUserContext from './contexts/current-user/current-user.context';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { GlobalStyle } from './global.styles';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shoppage/shoppage.component'));
const SignInPage = lazy(() =>
  import('./pages/signin-and-registerpage/signinpage/signinpage.component'));
const RegisterPage = lazy(() =>
  import('./pages/signin-and-registerpage/registerpage/registerpage.component'));
const CheckoutPage = lazy(() => import('./pages/checkoutpage/checkoutpage.component'));


const App = () => {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });

    return () => { unsubscribeFromAuth(); }
  }, [setCurrentUser])

  return (
    <div>
      <GlobalStyle />
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
      </CurrentUserContext.Provider>
      <Switch>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin'
            render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                  <SignInPage />
                )}
          />
          <Route exact path='/register'
            render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                  <RegisterPage />
                )}
          />
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
