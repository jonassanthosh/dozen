import React, { useState } from "react";
import WorkStats from "./WorkStats";
import { UserData } from "./TempData/data";
import {data} from './TempData/TodayData'

export default function PersonalCard() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.currentDate),
    datasets: [
      {
        label: "Work Hours",
        data: UserData.map((data) => data.clocked),
        backgroundColor: ["maroon"],
        TextColor: "white",
        cubicInterpolationMode: "monotone",
      },
    ],
  });

  const [breakData, setBreakData] = useState({
    labels: data.map((data) => data.Task),
    datasets: [
      {
        label: "Break (mins)",
        data: data.map((data) => data.break),
        backgroundColor: ["maroon"],
        TextColor: "white",
        cubicInterpolationMode: "monotone",
      },
    ],
  });

  const [waterData, setWaterData] = useState({
    labels: data.map((data) => data.Task),
    datasets: [
      {
        label: "Water Intake (ml)",
        data: data.map((data) => data.waterIntake),
        backgroundColor: ["maroon"],
        TextColor: "white",
        cubicInterpolationMode: "monotone",
      },
    ],
  });
  

  return (
    <div className=' w-2/4 m-2 p-5 space-y-5 rounded-2xl overflow-auto'>
      <p className=' text-orange-800 text-2xl'>This week&apos;s performance</p>
      <div>
        <p>Work Hours Clocked</p>
        <WorkStats chartData={userData} />
      </div>
      <p className=' text-orange-800 text-2xl'>Today Summary</p>
      <div>
        <p>Break </p>
        <WorkStats chartData={breakData} />
      </div>
      <div>
        <p>Water Intake </p>
        <WorkStats chartData={waterData} />
      </div>
    </div>
  );
}
