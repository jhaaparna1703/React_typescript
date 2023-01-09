import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {actionCreators, State} from './state'
import { bindActionCreators } from 'redux';


function App() {

  const dispatch = useDispatch();

  const {depositMoney, withdrawMoney, bankrupt} = bindActionCreators(actionCreators, dispatch)
  const state = useSelector((state:State)=> state.bank)

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={()=> depositMoney(1000)}>Deposit</button>
      <button onClick={()=> withdrawMoney(500)}>Withdraw</button>
      <button onClick={()=> bankrupt()}>Bankrupt</button>

       
    </div>
  );
}

export default App;
