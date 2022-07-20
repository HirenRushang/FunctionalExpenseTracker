import React, { useContext } from "react";
import "./Expense.css";
import {MdDeleteOutline} from "react-icons/md"
import { Budget } from "../Context/Context";

const Expense = () => {
 
  const {transection,deletetransection} = useContext(Budget)
  const transactionPerType = transection.filter((t) => t.type === "Expense");
  console.log(transactionPerType);
  const total = transactionPerType.reduce(
    (acc, currentVal) => (acc += currentVal.amount),
    0
  );
  console.log(total);
    
  return (
    <div className="expense_wrapper">
      <div className="expense_section">

        <div className="expense_section_title">
          <h3>Expense</h3>
        </div>
   
       <div className="expense_total">Total Expense: <sapn className="total">${total}</sapn></div>
        
       
        {transection.map((item) => {
          return item.type === "Expense" ? (
            <div className="expense_list" key={item.id}>
              <span className="amount">{item.amount}</span>
              <span className="category">{item.category}</span>
              <span className="delete_icon"><MdDeleteOutline onClick={()=> deletetransection(item.id)}/></span>
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
};

export default Expense;
