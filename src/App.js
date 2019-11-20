import React, { useState } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './App.css';
import './container.css'
import Navbar from './components/navbar/Navbar'
import Display from './components/display/Display'
import Numpad from './components/numpad/Numpad'
import reducer from './redux/reducers/reducer'

const store = createStore(reducer)


function App() {
  const messageState = useState( '' );
  return (
    <Provider store ={store}>
      <div className="App">
        <Navbar />
        <Display />
        <Numpad messageState={messageState} />
      </div>
    </Provider>
  );
}

export default App;
