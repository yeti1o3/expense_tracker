import React, { useContext } from 'react'
import './style/TransactionList.css'
import { GlobalContext } from './context/GlobalState'
function TransactionList() {
  const {transactions}=useContext(GlobalContext);
  console.log(transactions);
  return (
    <div className="TransactionList">
      {transactions.map((transaction) => (
        <div className={transaction.amount>0?"transactionItem income":"transactionItem expense"} key={transaction.id}>
          <span>{transaction.text} </span>
          <span>
            {transaction.amount < 0 ? "-" : "+"}${Math.abs(transaction.amount)}
          </span>
        </div>
      ))}
    </div>
  );
}

export default TransactionList