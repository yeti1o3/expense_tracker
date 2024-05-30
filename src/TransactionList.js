import React, { useContext } from 'react'
import './style/TransactionList.css'
import { GlobalContext } from './context/GlobalState'
function TransactionList() {
  const {transactions}=useContext(GlobalContext);
  console.log(transactions);
  return (
    <div>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          {transaction.text}{" "}
          <span>
            {transaction.amount < 0 ? "-" : "+"}${Math.abs(transaction.amount)}
          </span>
        </li>
      ))}
    </div>
  );
}

export default TransactionList