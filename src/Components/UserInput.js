import React, { useState, useContext } from "react";
import "./UserInput.css";
import formatDate from "../Utlis/FormDate";
import { incomeCategories, expenseCategories } from "../Constant/Category";
import { Budget } from "../Context/Context";
import { GrSend} from 'react-icons/gr';



import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
  Button,
} from "@mui/material";

const initialState = {
  type: "Income",
  category: "",
  amount: "",
  date: formatDate(new Date()),
};

const UserInput = () => {
  const { addtransection, balance } = useContext(Budget);

  const [formdata, setFormData] = useState(initialState);

  const selectedCategory =
    formdata.type === "Income" ? incomeCategories : expenseCategories;

  const createTransactions = () => {
    const userdata = {
      ...formdata,
      amount: Number(formdata.amount),
      id: Date.now(),
    };

    addtransection(userdata);
    setFormData(initialState);
  };

  return (
    <div className="userinput_wrapper container-fluid">
      <div className="userinput_section container">
        <div className="row heading">
          <h3>Expense Tracker</h3>
        </div>
        <div className="row total_balane">Total Balance: <span className="total">${balance}</span></div>
        <div className="row add_statement">
          <p>Add Statement</p>
        </div>
        <div className="row first">
          <div className="col-xl-6 user_data_type">
            {/* <FormControl variant="standard" fullWidth>
              <InputLabel id="demo-simple-select-standard-label">
                Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={formdata.type}
                onChange={(e) =>
                  setFormData({ ...formdata, type: e.target.value })
                }
              >
                <MenuItem value="Income">Income</MenuItem>
                <MenuItem value="Expense">Expense</MenuItem>
              </Select>
            </FormControl> */}
            <label>Choose a Type:</label>
            <select
              value={formdata.type}
              onChange={(e) =>
                setFormData({ ...formdata, type: e.target.value })
              }
            >
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>
          <div className="col-xl-6 user_data_category">
            {/* <FormControl variant="standard" fullWidth>
              <InputLabel id="demo-simple-select-standard-label">
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={formdata.category}
                onChange={(e) =>
                  setFormData({ ...formdata, type: e.target.value })
                }
              >
                {selectedCategory.map((item) => {
                  return (
                    <MenuItem key={item.type} value={item.type}>
                      {item.type}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl> */}

            <label>Choose a category:</label>
            <select
              value={formdata.category}
              onChange={(e) =>
                setFormData({ ...formdata, category: e.target.value })
              }
            >
              {selectedCategory.map((item) => {
                return (
                  <option key={item.type} value={item.type}>
                    {item.type}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="row sec">
          <div className="col-xl-6 user_data_amount">
            {/* <TextField
              id="standard-basic"
              label="Amount"
              variant="standard"
              value={formdata.amount}
              onChange={(e) =>
                setFormData({ ...formdata, amount: e.target.value })
              }
              fullWidth
            /> */}

            <label>Amount:</label>
            <input
              value={formdata.amount}
              type="number"
              onChange={(e) =>
                setFormData({ ...formdata, amount: e.target.value })
              }
            />
          </div>
          <div className="col-xl-6 user_data_date">
            <label>Choose a Date:</label>
            <input
              type="date"
              onChange={(e) =>
                setFormData({ ...formdata, date: formatDate(e.target.value) })
              }
            />
          </div>
        </div>
        <div className="row third">
          <div className="col-xl-12 user_data_create_btn">
            <Button variant="outlined" onClick={createTransactions} endIcon={<GrSend />}>
             Create
            </Button>
            {/* <button onClick={createTransactions}>Create</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInput;
