import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/logo.svg'
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'> SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {currentUser ?
                (<div className='option' onClick={() => auth.signOut()}>Sign Out</div>) :
                (<div>
                    <Link className='option' to='/signin'>Sign In</Link>
                    <Link className='option' to='/register'>Register</Link>
                </div>
                )
            }
            <CartIcon />
        </div>
        {!hidden && <CartDropdown />}
    </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);