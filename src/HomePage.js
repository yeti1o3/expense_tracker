import React from 'react'
import './HomePage.css'
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';
function HomePage() {
  return (
    <div className="HomePage">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
    </div>
  );
}

export default HomePage