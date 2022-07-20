import React, { useContext } from "react";
import "./Income.css";
import { MdDeleteOutline } from "react-icons/md";
import { Budget } from "../Context/Context";

const Income = () => {
  const { transection, deletetransection } = useContext(Budget);

  const transactionPerType = transection.filter((t) => t.type === "Income");
  console.log(transactionPerType);
  const total = transactionPerType.reduce(
    (acc, currentVal) => (acc += currentVal.amount),
    0
  );
  console.log(total);

  return (
    <div className="income_wrapper">
      <div className="income_section">
        <div className="income_section_title">
          <h3>Income</h3>
        </div>

        <div className="income_total">Total Income: <sapn className="total">${total}</sapn></div>

        {transection.map((item) => {
          return item.type === "Income" ? (
            <div className="income_list" key={item.id}>
              <span className="amount">${item.amount}</span>
              <span className="category">{item.category}</span>
              <span className="delete_icon">
                <MdDeleteOutline onClick={() => deletetransection(item.id)} />
              </span>
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
};

export default Income;
