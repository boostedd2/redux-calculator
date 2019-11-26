import React from 'react'
import './memorylist.css'

const memoryItems = [
  "W.I.P Redux Memory",
  83,
  62,
  44,
  495,
  3,
  205,
  993,
  2,
  -40,
]

const  MemoryList = () => {
  return (
    <div className="memory-list-container">
      <div className="memory-list">
        {memoryItems.map(item => 
          <div className="memory-item-container">
            <div className="memory-item">{item}</div>
            <div className="dismiss-button">X</div>
          </div>)}
      </div>
    </div>
  )
}

export default MemoryList;