import React, { useContext, useEffect, useState } from 'react'
import './style/Balance.css';
import { GlobalContext } from './context/GlobalState';

function Balance() {
  const {transactions}=useContext(GlobalContext);
  const limit=5000;
  const[spend_percent,setSpend_Percent]=useState(0)
   const total_balance =
     transactions.length > 0
       ? transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
       : 0;
  
  useEffect(()=>{
    setSpend_Percent((total_balance/limit)*100);
  },[total_balance])
  return (
    <div className='Balance'>
        <div className='Balancediv'>
           {total_balance}
        </div>
        <div className='total_avail'>
          <div className={spend_percent<80?'spended-less':'spended-more'} style={{width:spend_percent+'%',height:"100%"}}>

          </div>
        </div>
    </div>
  )
}

export default Balance