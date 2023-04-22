import React, { useEffect } from 'react'
import Calender from './Calender'
import PersonalCard from './PersonalCard'
import TodayStat from './TodayStat';
function MainContent() {
  return (
    <div className='min-h-full'>
      <div className='h-2/6'>
        <p className='text-2xl m-3'>Dashboard</p>
        <Calender />
      </div>
      <div className='flex flex-row h-screen'>
        <PersonalCard />
        <TodayStat/>
      </div>
    </div>
  );
}

export default MainContent