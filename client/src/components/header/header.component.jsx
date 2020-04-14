import React, { Fragment, useContext } from 'react';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { CartContext } from '../../providers/cart/cart.provider';
import CurrentUserContext from '../../contexts/current-user/current-user.context';
import { auth } from '../../firebase/firebase.utils';

import { HeaderContainer, LogoContainer, Logo, OptionsContainer, OptionLink } from './header.styles';


const Header = () => {
  const currentUser = useContext(CurrentUserContext)
  const { hidden, clearCart } = useContext(CartContext);
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>
          SHOP
      </OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={() => {
            auth.signOut();
            clearCart();

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
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
}

export default Header;
