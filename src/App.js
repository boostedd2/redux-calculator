import React from 'react';
import './App.css';
import './container.css'
import Navbar from './components/navbar/Navbar'
import Display from './components/display/Display'
import Numpad from './components/numpad/Numpad'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <Display />
        <Numpad />
      </div>
      
    </div>
  );
}

export default App;
