import React from "react";
import QuoteComponent from "./QuoteComponent";
import SideBar from "./SideBar";
const Layout = ({ children }) => {
  return (
    <div>
      <div className='rounded-xl m-2 bg-orange-200 ml-6 p-2'>
        <div className='flex flex-row-reverse p-5 justify-between'>
          <QuoteComponent />
          <p className="text-4xl text-blue-900">Dozen</p>
        </div>
      </div>
      <div className='flex'>
        <div className='grid w-1/4  min-h-screen'>
          <div className='flex flex-col bg-orange-200 rounded-xl ml-6 p-6'>
            <SideBar />
          </div>
        </div>
        <div className='flex-col w-3/4 rounded-xl bg-orange-200 p-2 mx-3'>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
