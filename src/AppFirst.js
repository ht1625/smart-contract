import { useState } from 'react';
import { ethers } from 'ethers'
import Lock from './artifacts/contracts/Lock.sol/Lock.json'

import "./App.css"
const greeterAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3';

const App = () => {
  // store greeting in local state
  const [greeting, setGreetingValue] = useState()

  // request access to the user's MetaMask account
  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  // call the smart contract, read the current greeting value
  async function fetchGreeting() {
    if (typeof window.ethereum !== 'undefined') {
      console.log("Enter fetchGreeting")  
    }   
  }

  // call the smart contract, send an update
  async function setGreeting() {
    if (typeof window.ethereum !== 'undefined') {
      console.log("Enter setGreeting")
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchGreeting}>Fetch Greeting</button>
        <button onClick={setGreeting}>Set Greeting</button>
        <input onChange={e => setGreetingValue(e.target.value)} placeholder="Set greeting" />
      </header>
    </div>
  );
}

export default App