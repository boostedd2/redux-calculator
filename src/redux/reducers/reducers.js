import {
  ADD_MEMORY_ITEM,
  REMOVE_MEMORY_ITEM
} from '../actions/actions'

const memoryStorage = (state = [], action) => {
  switch (action.type) {
    case ADD_MEMORY_ITEM:
      return [
        ...state,
        {
          id: action.id,
          total: action.total,
        }
      ]
    case REMOVE_MEMORY_ITEM:
      return state.filter(({ id }) => id !== action.id);
    default: 
      return state
  }
}

/*
const removeMemory = (state = [], action) => {
  switch (action.type) {
    case REMOVE_MEMORY_ITEM:
      return state.filter(({ id }) => id !== action.id);
    default:
      return state
  }
}
*/

export default memoryStorage