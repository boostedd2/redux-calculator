import React, { useState } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './container.css'
import Navbar from './components/navbar/Navbar'
import Calculator from './components/calculator/Calculator'
import memoryStorage from './redux/reducers/reducers';

export const store = createStore(memoryStorage)

function App() {
  const [results, setResults] = useState( 0 )
  const [display, setDisplay] = useState( 0 )

  return (
    <Provider store = {store}>
      <div className="App">
        <Navbar results={results} setResults={setResults} display={display} setDisplay={setDisplay} />
        <Calculator results={results} setResults={setResults} display={display} setDisplay={setDisplay} />
      </div>
    </Provider>
  );
}

export default App;
