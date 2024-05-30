import React, { useContext } from 'react'
import './style/Balance.css';
import { GlobalContext } from './context/GlobalState';

function Balance() {
  const {transactions}=useContext(GlobalContext);
   const total =
     transactions.length > 0
       ? transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
       : 0;
  return (
    <div className='Balance'>
        <div className='Balancediv'>
           {total}
        </div>
    </div>
  )
}

export default Balance