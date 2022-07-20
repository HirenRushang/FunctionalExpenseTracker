import React, { useContext, useEffect, useState } from "react";
import "./Home.css"
import Income from "../Components/Income";
import Expense from "../Components/Expense";
import UserInput from "../Components/UserInput";
import { ExpenseData } from "../Constant/Data";
import { Budget } from "../Context/Context";
import IncomeBar from "../Components/IncomeBar";
import ExpenseBar from "../Components/ExpenseBar";

const Home = () => {
  const { transection } = useContext(Budget);
  const transectionincome = transection.filter((cat) => cat.type === "Income");
  // console.log(transectionincome)
  const initialState = {
    labels: transectionincome.map((cat) => cat.category),
    datasets: [
      {
        label: "User Income",
        data: transectionincome.map((inc) => inc.amount),
        backgroundColor: ["#023020", "#097969", "#5F9EA0", "#AFE1AF"],
      },
    ],
  };

  const [incomingdata, setIncomingdata] = useState(initialState);
   
  useEffect(()=>{
    setIncomingdata({
      labels: transectionincome.map((cat) => cat.category),
      datasets: [
        {
          label: "User Income",
          data: transectionincome.map((inc) => inc.amount),
          backgroundColor: ["#023020", "#097969", "#5F9EA0", "#AFE1AF"],
        },
      ],
    })
  },[transection])

  const transectionexpense = transection.filter((cat) => cat.type === "Expense");
  // console.log(transectionexpense)

  const expenseinitialstate = {
    labels: transectionexpense.map((cat) => cat.category),
    datasets: [
      {
        label: "User Expense",
        data: transectionexpense.map((inc) => inc.amount),
        backgroundColor: ["#023020", "#097969", "#5F9EA0", "#AFE1AF"],
      },
    ],
  };
  
  const [expenseingdata, setExpenseingdata] = useState(expenseinitialstate);
  
  useEffect(()=>{
    setExpenseingdata({
      labels: transectionexpense.map((cat) => cat.category),
      datasets: [
        {
          label: "User Expense",
          data: transectionexpense.map((inc) => inc.amount),
          backgroundColor: ["#986868", "#AA4A44", "#800020", "#D2042D","#C41E3A"],
        },
      ],
    })
  },[transection])
 
 
  return (
    <div className="home_wrapper container-fluid">
      <div className="home_section container">
        <div className="row">
          <div className="col-xl-3">
            <Income incomedata={ExpenseData} />
            
          </div>
          <div className="col-xl-6">
            <div className="user_form"><UserInput /></div>
            <div className="user_data_chart">
              <div><IncomeBar incomedata={incomingdata} /></div>
              <div><ExpenseBar expensedata={expenseingdata} /></div>
            </div>
           
          </div>
          <div className="col-xl-3">
            <Expense expensedata={ExpenseData} />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
