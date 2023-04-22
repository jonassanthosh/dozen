import Link from 'next/link';
import React from 'react'
import { HiUserCircle } from 'react-icons/hi'
import {IoNotificationsSharp} from 'react-icons/io5'

export default function SideBar() {
  return (
    <div className=' space-y-5 '>
      <div className='flex flex-row items-center'>
        <HiUserCircle size={40} style={{ color: "#7c2d12" }} />
        <Link className=' m-2 text-lg' href='/'>
          Dashboard
        </Link>
      </div>
      <div className='flex flex-row items-center'>
        <IoNotificationsSharp size={40} style={{ color: "#7c2d12" }} />
        <Link className=' m-2 text-lg' href='/notifications'>
          Notification Settings
        </Link>
      </div>
      <div className='flex flex-row items-center'>
        <HiUserCircle size={40} style={{ color: "#7c2d12" }} />
        <Link className=' m-2 text-lg' href='/settings'>
          Settings
        </Link>
      </div>
    </div>
  );
}
