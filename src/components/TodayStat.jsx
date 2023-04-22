import React from "react";
import {data} from './TempData/TodayData'

export default function TodayStat({ chartData }) {
  return (
    <div className='flex flex-col overflow-auto space-y-8 text-white w-2/4 m-2 p-5'>
      <p className=' text-orange-800 text-3xl'>Today&apos;s Summary</p>
      {data?.map((data) => {
        return (
          <div key={data.id} className='flex flex-col bg-orange-800 p-5 rounded-md '>
            <div className='flex'>
              <span>Task:</span>
              <p className=' pl-5 '>{data.Task}</p>
            </div>
            <div className='flex'>
              <span>Start Time :</span>
              <p className=' pl-5 '>{data.startTime} Hrs</p>
            </div>
            <div className='flex'>
              <span>End Time</span>
              <p className=' pl-5 '>{data.endTime} Hrs</p>
            </div>
            <div>
              <p>
                You have taken {data.break}min break and drunk{" "}
                {data.waterIntake}ml of water
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
