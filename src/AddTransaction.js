import React,{useState} from 'react'
import './AddTransaction.css'
function AddTransaction() {
  const [value,setValue]=useState(0);
  return (
    <div className='AddTransaction'>

      AddTransaction
      <input type='number' value={value} onChange={(e)=>{setValue(e.target.value)}}></input>
    </div>
  )
}

export default AddTransaction