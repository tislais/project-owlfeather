import React from 'react';

const nav = `
  hidden
  sm:col-span-12 sm:block
  md:col-span-12
  lg:col-span-3
  2xl:col-span-2
  `;
const ul = `
  flex flex-col text-green-200 text-lg font-light tracking-wider
  sm:flex-row sm:bg-gray-800 sm:justify-evenly sm:py-2
  lg:flex-col lg:bg-transparent lg:font-normal lg:p-6 lg:mt-6 lg:ml-6 lg:rounded-xl
  xl:text-right
  2xl:font-normal
`;
const li = `
  px-4 py-2
  hover:text-white
  border-opacity-0 border-b-2 border-green-300 hover:border-opacity-30 
  cursor-pointer
  lg:text-green-300`;

const Side = () => {
  return (
    <nav className={nav}>
      <ul className={ul}>
        <li className={li}>Home</li>
        <li className={li}>Product</li>
        <li className={li}>Docs</li>
        <li className={li}>Company</li>
        <li className={li}>Contact</li>
      </ul>
    </nav>
  )
};

export default Side;