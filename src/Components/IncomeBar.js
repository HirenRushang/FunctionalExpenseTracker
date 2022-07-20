import React from 'react'
import { Chart } from 'chart.js/auto'

import { Pie } from 'react-chartjs-2'


const IncomeBar = ({incomedata}) => {
  return (
    <div style={{width:300}}>
      <Pie data={incomedata}></Pie>
    </div>
   
  )
}

export default IncomeBar