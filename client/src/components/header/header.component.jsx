import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {clearCart} from '../../redux/cart/cart.actions';

import { HeaderContainer, LogoContainer, Logo, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden, dispatch }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={() => {
          auth.signOut();
          dispatch(clearCart());

        }}>
          SIGN OUT
        </OptionLink>
      ) : (
          <Fragment>
            <OptionLink to='/signin'>
              SIGN IN
        </OptionLink>
            <OptionLink to='/register'>
              REGISTER
        </OptionLink>
          </Fragment>
        )}
      <CartIcon/>
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);