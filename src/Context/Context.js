import { createContext, useReducer } from "react";
import { ExpenseData } from "../Constant/Data";


function contextReducer(state,action){
    let transactions;

    switch (action.type) {
        case "ADD":
            transactions = [...state, action.payload]
            console.log(transactions)
            return transactions;
        case "DEL":
            transactions = state.filter((c)=>{return(c.id !== action.payload)})  
             return transactions;
        default:
            return state;
    }
}

const initialState = ExpenseData;


export const Budget = createContext();

 const Context = ({children})=>{


  const[transection, dispatch] = useReducer(contextReducer, initialState)

  const addtransection = (userdata)=>{
      console.log(userdata)
      dispatch({type:"ADD", payload:userdata})
  }
  
  const deletetransection = (id)=>{
      dispatch({type:"DEL", payload:id})
}


const balance = transection.reduce((acc, crrVlue) => crrVlue.type === 'Expense' ? acc - crrVlue.amount : acc + crrVlue.amount, 0 )

// const incomebalance = transection.reduce((acc,crrvlue)=> crrvlue.type ==="Income" ? Number(acc) + Number(crrvlue.amount) : null, 0)
// console.log(incomebalance)


// const expensebalance = transection.reduce((total,value)=> value.type === "Expense" ? Number(total) + Number(value.amount) : null, 0)
// console.log(expensebalance)



    return(
    <Budget.Provider value={{transection,addtransection,deletetransection,balance}}>
        {children}
     </Budget.Provider>
    )
  

}


export default Context;
