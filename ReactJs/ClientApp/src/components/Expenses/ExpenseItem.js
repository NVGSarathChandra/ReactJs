import React, {useState, useEffect } from 'react';
import { Card } from 'reactstrap';
import './ExpenseItem.css';
import './ExpenseDate.css';

export default function ExpenseItem(props) {
    console.log(props)
    const expenses = [
        {
            expenseDate: new Date(2021, 2, 12),
            expenseTitle: 'Car Insurance',
            expenseAmount: '$221.25'
        },
        {
            expenseDate: new Date(2021, 4, 25),
            expenseTitle: 'Bike Insurance',
            expenseAmount: '$152.50'
        },
    ]
    const expensesData = expenses;
    const titleChange = (event) => {
        // event.expenseTitle
        console.log('titleChange event', event)
       
    }
    const menu = () =>
        expensesData.map((item, index) => (
            <div className="expense-item" key={item.expenseTitle + '-' + index}>
                <div className="expense-date">
                    <div className="expense-date__month">{item?.expenseDate.toLocaleString('en-US', { month: 'long' })}</div>
                    <div className="expense-date__date">{item?.expenseDate.toLocaleString('en-US', { day: '2-digit' })}</div>
                    <div className="expense-date__year">{item?.expenseDate.getFullYear()}</div>

                </div>
                <div className="expense-item__description">
                    <h2>{item.expenseTitle} </h2>
                    <div className="expense-item__price">{item.expenseAmount}</div>
                    <input type="date" />
                    <button onClick={titleChange}>Click change</button>
                </div>
                </div>
        )
        )
            
    return (

        <>
            <h2 style={{ marginBottom:'10px' }}>Expense Report</h2>
                {menu()}
        </>
    )
}