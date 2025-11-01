import React from 'react';
import Expense_Reducer from './Expense_Reducer'
import { useReducer , useEffect} from 'react';
import AddExpense from './AddExpense';
import ExpenseList from './ExpenseList';
import NetAmount from './NetAmount';

function loadInitialState(initialExpenses){
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : initialExpenses;
}
function Tracker(){
    const initialExpenses = [];
    const [expenses , dispatch] = useReducer(Expense_Reducer , initialExpenses , loadInitialState);

    useEffect( () => {
        localStorage.setItem('expenses',JSON.stringify(expenses));
    },[expenses]);
    return(
        <>
        <div className="flex justify-center items-center">
            <div className="pt-30 pl-20">
            <h1 className=" sm:ml-20 font-poppins text-5xl tracking-tight bg-gradient-to-r from-gray-600 via-gray-300 to-gray-600 bg-clip-text text-transparent font-bold  [filter:drop-shadow(0_0_40px_white)]">Expense Tracker</h1>
              <AddExpense dispatch={dispatch}/>
              <ExpenseList expenses={expenses} dispatch={dispatch}/>
              <NetAmount expenses={expenses}/>
             </div>
        </div>
        </>
    )
}
export default Tracker;