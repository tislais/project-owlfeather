import React from 'react';

const header = `
  col-span-12 
  bg-gradient-to-r 
  from-green-500 
  to-blue-500 
  p-4
  flex
  gap-4
  border-b-8
  border-black
  border-opacity-30
`;

const h1 = `
  text-md 
  font-semibold 
  tracking-wider 
  uppercase
`;



const Header = () => {
  return (
    <header className={header}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <h1 className={h1}>Project Owlfeather</h1>
    </header>
  )
};

export default Header;

