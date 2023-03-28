import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todos from './component/Todos/Todos';

function App() {
  return (
    <div>
      <Todos></Todos>
      {/* <PhoneCharge></PhoneCharge> */}
    </div>
  )
}

function PhoneCharge(){
  const [charge, setCharge] = useState(100);
  console.log(charge);
  const decreaseCharge = () => {
    if(charge !== 0){
      setCharge(charge-10);
    }
  }

  const increaseCharge = () => {
    if(charge !== 100){
      setCharge(charge+10);
    }
  }
  return (
    <div>
      <h1>Phone Charge : {charge}</h1>
      <button onClick={decreaseCharge}>Decrease</button>
      <button onClick={increaseCharge}>Increase</button>
    </div>
  );
}

export default App;
