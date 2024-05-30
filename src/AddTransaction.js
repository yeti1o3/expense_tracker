import React,{useContext, useState} from 'react'
import './style/AddTransaction.css'
import { GlobalContext } from './context/GlobalState';
function AddTransaction() {
  const [text,setText]=useState('');
  const [amount,setAmount]=useState();
  const {addTransaction}=useContext(GlobalContext);
  function AddTransaction(){
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      amount: +amount,
      text: text,
    };
    addTransaction(newTransaction);
    setText('');
    setAmount(0);
  }

  return (
    <div>
      <input value={text} onChange={(e)=>{setText(e.target.value)}} placeholder='enter note'>
      </input>
      <input value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder='enter amount'>
      </input>
      <button onClick={AddTransaction}>ADD TRANSACTION</button>
    </div>
  );
}

export default AddTransaction