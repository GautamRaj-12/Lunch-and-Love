import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <header>
        <nav className='flex justify-between w-[90%] mx-auto'>
          <h2>
            <Link to='/'>Lunch & Love</Link>
          </h2>
          <ul className='flex list gap-x-16'>
            <li className='list-items'>
              <Link to=''>Offers</Link>
            </li>
            <li className='list-items'>
              <Link to='/about'>About</Link>
            </li>
            <li className='list-items'>
              <Link to='/help'>Help</Link>
            </li>
            <li className='list-items'>
              <Link to=''>Sign In</Link>
            </li>
            <li className='list-items'>
              <Link to=''>Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
