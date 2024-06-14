import React,{useContext, useState} from 'react'
import './style/AddTransaction.css'
import { GlobalContext } from './context/GlobalState';
function AddTransaction() {
  const [text,setText]=useState('');
  const [amount,setAmount]=useState();
  const[close,setClose]=useState(true);
  const {addTransaction}=useContext(GlobalContext);
  function AddTransaction(){
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      amount: +amount,
      text: text,
    };
    addTransaction(newTransaction);
    setText('');
    setAmount('');
  }
  function openAddTransaction()
  {
    setClose(!close);
  }

  return (
    <div>
     {!close&&<div className='inputDiv'>
      <div>
        <input  className='input' value={text} onChange={(e)=>{setText(e.target.value)}} placeholder='enter note'>
      </input>
      <input className='input' value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder='enter amount'>
      </input>
      </div>
      <button onClick={AddTransaction} className='button'>ADD TRANSACTION</button>
    </div>}
    <button onClick={openAddTransaction} className='button'>ADD</button>

    </div>

  );
}

export default AddTransaction