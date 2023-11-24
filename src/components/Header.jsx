import React from 'react';

const Header = () => {
  return (
    <>
      <header>
        <nav className='flex justify-between w-[90%] mx-auto'>
          <h2>Lunch & Love</h2>
          <ul className='flex list gap-x-16'>
            <li className='list-items'>
              <a href=''>Offers</a>
            </li>
            <li className='list-items'>
              <a href=''>Help</a>
            </li>
            <li className='list-items'>
              <a href=''>Sign In</a>
            </li>
            <li className='list-items'>
              <a href=''>Cart</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
