import React from 'react';
import './App.css';
import ContextCounter from'./ContextCounter';
import MobXCounter from './MobXCounter';
function App() {
  return (
    <div className="App">
      <ContextCounter/>
      <h3>MobX Date Cpounter</h3>
      <MobXCounter />
    </div>
  );
}

export default App;
