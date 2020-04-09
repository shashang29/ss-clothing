import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInPage from './pages/signinpage/signinpage.component';
import RegisterPage from './pages/registerpage/registerpage.component';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkoutpage/checkoutpage.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';

const App = ({ setCurrentUser, currentUser }) => {

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
      <Header />
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


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});



const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
