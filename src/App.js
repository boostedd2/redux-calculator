import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './container.css'
import Navbar from './components/navbar/Navbar'
import Numpad from './components/numpad/Numpad'
import { addItem, removeItem } from './redux/actions/actions'
import memoryStorage from './redux/reducers/reducers';

export const store = createStore(memoryStorage)

console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(addItem(678))
store.dispatch(addItem(574))
store.dispatch(addItem(728))

store.dispatch(removeItem(2))

store.dispatch(addItem(555))

unsubscribe()



function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <Navbar />
        <Numpad />
      </div>
    </Provider>
  );
}

export default App;
