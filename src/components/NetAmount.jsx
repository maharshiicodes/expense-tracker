import React from "react";
import {useState , useEffect} from "react";

export default function NetAmount({expenses}){
    const [total , setTotal] = useState(0);
    useEffect ( () => {
        const sum = expenses.reduce( (acc,expense) => acc + expense.amount , 0);
        setTotal (sum);
    },[expenses])
    return(
        <>
        <div className="mt-10 bg-white sm:w-120 w-150 rounded-md p-5">
        <h2 className="font-poppins text-2xl font-bold mb-5">Net Amount</h2>
        <p className="text-gray-500">Total Expenses: {total} Rs</p>
        </div>
        </>
    )
}