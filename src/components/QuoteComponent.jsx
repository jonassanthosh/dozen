import React, { useEffect, useState } from "react";
import axiosInstance from "@/pages/axiosIntsance";
import { Open_Sans } from 'next/font/google'

const cusFont = Open_Sans({
    weight: "500",
    style: ['normal'],
    subsets: ['latin']
})
export default function QuoteComponent (){
  const [qDay, setqDay] = useState("");
  useEffect(() => {
    axiosInstance
      .get("quotes/random?tags=inspirational&maxLength=80")
        .then((res) => {
            setqDay(res.data[0].content);
      });
  },[]);
    return (
      <div className={`${cusFont.className} text-3xl`}>
        <p className='text-orange-900'>{qDay}</p>
      </div>
    );
};

