import axiosInstance from "@/pages/axiosIntsance";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
function Calender() {
  var b = new Date();
  var weeks = [];
  for (let i = 0; i < 14; i++) {
    var newDate = new Date(b.getFullYear(), b.getMonth(), b.getDate() + i);
    var nameOftheDay = newDate.toLocaleDateString("en-US", {
      weekday: "short",
    });
    var numberOftheDay = newDate.getDate();
    weeks.push({
      date: numberOftheDay,
      day: nameOftheDay,
    });
  }
  return (
    <div>
      <h2 className='w-auto'>Welcome</h2>
      <div className='flex flex-row align-baseline overflow-auto'>
        {weeks?.map((k, i) => {
          return (
            <div
              key={i}
              className={`flex-col ${
                k.date == b.getDate()
                  ? "bg-orange-900"
                  : "border-2 border-orange-900"
              }  p-8 rounded-full h-auto w-auto m-5`}
            >
              <p
                className={` text-3xl  ${
                  k.date == b.getDate() ? "text-white" : "text-orange-900"
                } `}
              >
                {k.date}
              </p>
              <p
                className={` text-xl mt-2 ${
                  k.date == b.getDate() ? "text-white" : "text-orange-900 "
                } `}
              >
                {k.day}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calender;
