import React, { useState } from "react";
import { toast } from "react-toastify";

export default function WorkCard() {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [breakTime, setBreakTime] = useState(0);
  const [lunchTime, setLunchTime] = useState(0);
  const [waterIntake, setWaterIntake] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const workSchedule = {
      startTime,
      endTime,
      breakTime,
      lunchTime,
      waterIntake,
    };
    localStorage.setItem("workSchedule", JSON.stringify(workSchedule));
    toast("Work schedule saved!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className=' md:w-2/4 rounded-2xl m-2 p-10 bg-orange-900'>
      <p className='text-white text-lg'>Work Schedule</p>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col space-y-6'>
          <label className='text-white'>Start Time</label>
          <input
            type='time'
            className='h-10 rounded-lg'
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
          <label className='text-white'>End Time</label>
          <input
            type='time'
            className='h-10 rounded-lg'
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
          <label className='text-white'>Break time (minutes)</label>
          <input
            type='number'
            className='h-10 rounded-lg'
            value={breakTime}
            onChange={(e) => setBreakTime(e.target.value)}
          />
          <label className='text-white'>Lunch time (minutes)</label>
          <input
            type='number'
            className='h-10 rounded-lg'
            value={lunchTime}
            onChange={(e) => setLunchTime(e.target.value)}
          />
          <label className='text-white'>Water Intake (Litres)</label>
          <input
            type='number'
            className='h-10 rounded-lg'
            value={waterIntake}
            onChange={(e) => setWaterIntake(e.target.value)}
          />
        </div>
        <button
          type='submit'
          className='bg-white text-orange-900 mt-5 font-bold py-2 px-4 rounded'
        >
          Save
        </button>
      </form>
    </div>
  );
}
