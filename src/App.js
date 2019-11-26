import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './App.css';
import './container.css'
import Navbar from './components/navbar/Navbar'
import Numpad from './components/numpad/Numpad'
import reducer from './redux/reducers/reducer'

const store = createStore(reducer)


function App() {
  return (
    <Provider store ={store}>
      <div className="App">
        <Navbar />
        <Numpad />
      </div>
    </Provider>
  );
}

export default App;
