import React, { useContext } from 'react'
import './style/IncomeExpenses.css'
import { GlobalContext } from './context/GlobalState';
function IncomeExpenses() {
  const {transactions}=useContext(GlobalContext)
  const amount=transactions.map((transactions)=>transactions.amount);
  const income=amount.filter(amount=>amount>0).reduce((acc,amount)=>acc+amount,0).toFixed(2);
  const expense=amount.filter(amount=>amount<0).reduce((acc,amount)=>acc+amount,0).toFixed(2);
  return (
    <div className="IncomeExpenses">
      <div className='Income'>+{income}</div>
      <div className='Expense'>-{expense}</div>
    </div>
  );
}

export default IncomeExpenses