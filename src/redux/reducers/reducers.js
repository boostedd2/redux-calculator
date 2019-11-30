import { combineReducers } from 'redux'
import {
  ADD_MEMORY_ITEM,
  REMOVE_MEMORY_ITEM
} from '../actions/actions'

const addMemory = (state = [], action) => {
  switch (action.type) {
    case ADD_MEMORY_ITEM:
      return [
        ...state,
        {
          id: action.id,
          total: action.total,
        }
      ]
    default: 
      return state
  }
}

const removeMemory = (state = [], action) => {
  switch (action.type) {
    case REMOVE_MEMORY_ITEM:
      return state.filter(({ id }) => id !== action.rmTotal);
    default:
      return state
  }
}

const memoryManager = combineReducers({
  addMemory,
  removeMemory
})

export default memoryManager