export default function ExpenseReducer(expenses , action){
     switch(action.type){
        case 'add' : {
            return [
                ...expenses,
                {
                    id : action.id,
                    category : action.category,
                    amount : action.value,
                }
            ]
        }
        case 'edit' : {
            return expenses.map((expense) => {
                 if(expense.id === action.id){
                    return { ...expense, category: action.category,amount:action.amount, };
                 } else {
                    return expense;
                 }
            })
        }
        case 'delete-expense' : {
            return expenses.filter((expense) => {
               return expense.id !== action.id;
            })
        }
        default: {
            throw new Error('Unknown action type');
        }
     }
}