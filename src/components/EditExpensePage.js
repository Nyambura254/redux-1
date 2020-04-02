import React from 'react';
import {connect } from "react-redux";
import { editExpense, removeExpense} from '../actions/expenses';
//use curly braces when using return
//react-router-dom gives us the object(props),match,params & id 
const EditExpensePage = (props) => {
    return ( 
    <div> 
        <ExpenseForm 
        expense={props.expense}
        onSubmit={expense => {
            props.dispatch(editExpense(props.expense.id, expense));
            props.history.push("/")
        }}
        />
        <button>Remove</button>
        //Editing the expense with id of {props.match.params.id} 
    </div>
    )
}
 mapStateToProp: (state, props) => {
     return {
         expense: state.expenses.find (expense => 
            expense.id === props.match.params.id)
     }
 }

export default connect (mapStateToProp) (EditExpensePage);