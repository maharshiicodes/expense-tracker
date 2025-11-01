import React from "react";
import { useState } from "react";
import Expense_Reducer from "./Expense_Reducer";

export default function AddExpense({dispatch}){
    const[expense , setExpense] = useState('');
    const[amount , setAmount] = useState(0);

    function handleClick(){
        dispatch({
          type:'add',
          id : Math.random().toString(),
          category : expense,
          value : parseFloat(amount),
        });
        setExpense('');
        setAmount(0);
    }
    return(
        <div className = " flex flex-nowrap gap-3 items-center bg-white  h-50  sm:w-120 w-150  mt-10 rounded-md p-5 ">
      <input type="text" 
      value={expense} 
      placeholder={"   Enter your Expense..."} 
      onChange={ (e)=> setExpense(e.target.value)} 
      className="border border-black w-100 h-10 rounded-md focus:outline-none  focus:ring-2  focus:ring-blue-400"/>
        <input type="number" 
        value={amount} 
        onChange={ (e)=> setAmount(e.target.value) }
        className="border border-black h-10 w-20 rounded-md focus:outline-none focus:ring-2  focus:ring-blue-300"/>
        <button 
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md "
        >Add</button>
      </div>
    )
}