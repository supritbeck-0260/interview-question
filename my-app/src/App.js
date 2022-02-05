import './App.css';
import {useState} from 'react'
function App() {
  const [seconds,setSeconds] =  useState(0);
  const INTERVAL =1000;
  const [clearCode,setClearCode] = useState(null)
  const startHandler =()=>{
    if(clearCode) return
   const interval =  setInterval(()=>{
      setSeconds(prev=>prev+1)
    },INTERVAL)
    setClearCode(interval)
  }
  
  const stopHandler = ()=>{
    clearInterval(clearCode)
    setClearCode(null)
  }
  return (
    <div className="outer_box">
      <div className="inner_box">
        <h2>{seconds}s - </h2>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </div>
  );
}

export default App;
