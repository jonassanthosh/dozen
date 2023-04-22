import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart } from 'chart.js/auto';

export default function WorkStats({ chartData }) {
  return (
    <div>
      <Line
        className=' h-full  '
        data={chartData}
        options={{
          bezierCurve: true,
        }}
      />
    </div>
  );
}
