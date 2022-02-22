import { useState } from 'react';
import './App.css';

function changeColor(){
  const btn=document.getElementById("clickButton");
  btn.style.backgroundColor='red';
  btn.textContent="Color Changed";
}
function App() {
  const [disabled,setDisabled]=useState(false);
  return (
    <div className="App">
      <button 
        id='clickButton' 
        style={{backgroundColor : disabled? 'gray' : 'yellow'}} 
        onClick={changeColor}
        disabled={disabled}>
        Click Here
      </button>
      <br />
      <br />
      <label htmlFor='enable'>
        Disable Button
      </label>
      <input 
        type='checkbox'
        id='enable'
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e)=>setDisabled(e.target.checked)} />
    </div>
  );
}

export default App;
