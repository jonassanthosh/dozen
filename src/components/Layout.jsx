import React from "react";
import {HiBadgeCheck} from 'react-icons/hi'
const Layout = ({ children }) => {
  return (
    <div>
      <div className='grid grid-rows-header rounded-xl m-2 bg-sky-200 ml-6 p-2'>
        Header
      </div>
      <div className='flex'>
        <div className='grid w-1/4  min-h-screen'>
          <div className='flex flex-col bg-sky-200 rounded-xl ml-6 py-2'>
            <HiBadgeCheck size={60} />
          </div>
        </div>
        <div className="flex-col w-3/4 rounded-xl bg-orange-200 p-2 mx-3">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;