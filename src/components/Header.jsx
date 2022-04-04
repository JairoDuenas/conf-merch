import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import AppContex from '../context/AppContex';
import '../styles/components/Header.css';

const Header = () => {
  const { state } = useContext(AppContex);
  const { cart } = state;

  return (
    <div className='Header'>
      <h1 className='Header-title'>
        <Link to="/">
          Conf Merch
        </Link>
        
      </h1>
      <div className='Hearder-checkout'>
        <Link to="/checkout" >
        <FaShoppingBasket className='shopping' />
        </Link>
        {cart.length > 0 && <div className='Header-alert'>{cart.length}</div>}
      </div>
    </div>
  );
}

export default Header;