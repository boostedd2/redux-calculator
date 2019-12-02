//action types
export const ADD_MEMORY_ITEM = "ADD_MEMORY_ITEM"
export const REMOVE_MEMORY_ITEM = "REMOVE_MEMORY_ITEM"

//action creators
let nextMemItem = 0
export const addItem = total => ({
    type: ADD_MEMORY_ITEM,
    id: nextMemItem++,
    total
})

export const removeItem = id => ({
    type: REMOVE_MEMORY_ITEM,
    id
})