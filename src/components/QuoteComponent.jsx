import React, { useEffect, useState } from "react";
import axiosInstance from "@/axios/axiosIntsance";

export default function QuoteComponent (){
  const [qDay, setqDay] = useState("");
  useEffect(() => {
    axiosInstance
      .get("quotes/random?tags=inspirational&maxLength=50")
        .then((res) => {
            setqDay(res.data[0].content);
        }).catch(() => {
        setqDay("Don't settle for average. Bring your best to the moment");
      });
  },[]);
    return (
      <div className='text-3xl'>
        <p className='text-orange-900'>{qDay}</p>
      </div>
    );
};

