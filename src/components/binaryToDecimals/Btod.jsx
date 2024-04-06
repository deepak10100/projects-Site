import React, { useState } from 'react'
import  './Btod.css'
const Btod = () => {
    let [binary, setBinary]= useState("Enter the binary number")
    let [result, setResult] = useState("")
    const handleSubmit= () =>{
        let decimal = parseInt(binary,2)
        setResult(decimal)  
        setBinary(''); // Clear the binary state
  document.getElementById('binary-input').value = ''; // Clear the input field
    }
  return (
    <>
    <h1 class="heading">Binary to Decimal Converter</h1>
    <form class="form-design">
  <div class="form-group">
    <input type="text" value={binary} onClick={()=> setBinary('')} onChange={(e)=>(setBinary(e.target.value))}  id="binary-input" class="form-control" />
    { result !=="" && <p> Decimal: {result}</p> }
  </div>
  
  <button type="button" onClick={handleSubmit} class="btn btn-primary">Convert</button>
</form>
    </>
  )
}

export default Btod
