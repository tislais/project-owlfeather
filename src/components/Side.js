import React from 'react';

const Side = () => {
  return (
    <nav className={nav}>
      <ul className={ul}>
        <li className={li + selected}>Home</li>
        <li className={li}>Product</li>
        <li className={li}>Docs</li>
        <li className={li}>Company</li>
        <li className={li}>Contact</li>
      </ul>
    </nav>
  )
};

const nav = `
  hidden
  sm:block
  sm:col-span-12 
  md:col-span-12
  lg:col-span-3
  2xl:col-span-3
`;

const ul = `
  flex 
  flex-row 
  gap-4
  text-gray-200 
  text-lg 
  tracking-wider 
  shadow-md

  sm:bg-gray-800
  sm:justify-evenly 
  sm:p-2

  lg:gap-1
  lg:my-6
  lg:ml-6
  lg:flex-col 
  lg:p-4  
  lg:rounded-md

  2xl:bg-gray-900
`;

const li = `
  px-4 
  cursor-pointer
  w-full
  text-center
  gap-1
  
  hover:text-white
  hover:border-opacity-30 

  sm:text-sm
  sm:hover:bg-white
  sm:hover:bg-opacity-10
  sm:rounded-full
  sm:px-6
  sm:py-2

  lg:text-left
  lg:mb-2
  lg:text-gray-100
  lg:text-lg

  xl:hover:border-gray-500

  2xl:text-green-300
  2xl:font-light
`;

const selected = `
  bg-white 
  bg-opacity-10 
  2xl:text-white
`;

export default Side;