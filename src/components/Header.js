import React from 'react';

const header = 'col-span-12 bg-gradient-to-r from-green-500 to-blue-500 p-4';
const h1 = 'text-md font-semibold tracking-wider uppercase';

const Header = () => {
  return (
    <header className={header}>
      <h1 className={h1}>Project Owlfeather</h1>
    </header>
  )
};

export default Header;