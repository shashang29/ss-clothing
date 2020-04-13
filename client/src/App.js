import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInPage from './pages/signin-and-registerpage/signinpage/signinpage.component';
import RegisterPage from './pages/signin-and-registerpage/registerpage/registerpage.component';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkoutpage/checkoutpage.component';

import CurrentUserContext from './contexts/current-user/current-user.context';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


import './App.css';

const App = () => {

  const [currentUser, setCurrentUser]=useState(null);

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
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      </CurrentUserContext.Provider>
      <Switch>
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
      </Switch>
    </div>
  );
}

export default App;
