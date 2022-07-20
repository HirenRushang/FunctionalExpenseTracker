import React from 'react'
import { Chart } from 'react-chartjs-2'

const ExpenseBar = ({expensedata}) => {
  return (
    <div style={{width:300}}>
      <Chart type="doughnut" data={expensedata}/>
    </div>
    
  )
}

export default ExpenseBar