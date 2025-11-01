import React from "react";
import { useState } from "react";

export default function ExpenseList({ expenses, dispatch }) {
    const [editingId, setEditingId] = useState(null);
    
   
    const [editingCategory, setEditingCategory] = useState(''); 
    const [editingAmount, setEditingAmount] = useState(0);

    function handleDelete(id) {
        dispatch({
            type: 'delete-expense',
            id: id,
        });
    }

    return (
        <div className="mt-10 bg-white sm:w-120 w-150 rounded-md p-5">
            <h2 className="font-poppins text-2xl font-bold mb-5">Expense List</h2>
            {expenses.length === 0 ? (
                <p className="text-gray-500">No expenses added yet.</p>
            ) : (
                <ul className="space-y-3">
                    {expenses.map((expense) => {
                        const isEditing = editingId === expense.id;
                        return (
                            <li key={expense.id} className="flex justify-between items-center ">
                                {isEditing ? (
                                    <>
                                        <input
                                            type="text"
                                            value={editingCategory}
                                            onChange={(e) => setEditingCategory(e.target.value)}
                                            className="border border-gray-300 rounded p-1"
                                        />
                                        <input
                                            type="number"
                                            value={editingAmount}
                                            onChange={(e) => setEditingAmount(e.target.value)}
                                            className="border border-gray-300 rounded p-1 w-20"
                                        />
                                        <div className="flex items-center gap-3">
                                            <button
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                                                onClick={() => {
                                                   
                                                    dispatch({
                                                        type: 'edit',
                                                        id: expense.id,
                                                        category: editingCategory,
                                                        amount: parseFloat(editingAmount)
                                                    });
                                                    setEditingId(null);
                                                }}
                                            >
                                                Save
                                            </button>
                                            <button
                                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
                                                onClick={() => {
                                                   
                                                    setEditingId(null); 
                                                }}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex justify-between items-center gap-1">
                                            <span className="font-medium text-gray-800">{expense.category}</span>
                                            {expense.amount > 0 ? (
                                                <span className="font-bold text-green-400">+{expense.amount}Rs</span>
                                            ) : (
                                                <span className="font-bold text-red-500">{expense.amount}Rs</span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-3 ">
                                            <button
                                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
                                                onClick={() => {
                                                    setEditingId(expense.id);
                                                    setEditingCategory(expense.category);
                                                    setEditingAmount(expense.amount);
                                                }}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
                                                onClick={() => handleDelete(expense.id)}>
                                                Delete
                                            </button>
                                        </div>
                                    </>
                                )}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}