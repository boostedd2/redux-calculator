import React from 'react'
import { connect } from 'react-redux'
import { removeItem } from '../../redux/actions/actions'
import './memorylist.css'

const  MemoryList = ({memory, removeItem}) => {
  return (
    <div className="memory-list-container">
      <div className="memory-list">
        {memory.length ? memory.map(item => 
          <div key={item.id} className="memory-item-container">
            <div className="memory-item">{item.total}</div>
            <div className="dismiss-button" onClick={() => removeItem(item.id)}>X</div>
          </div>): <div className="empty-list">Empty? Add items using the memory button.</div>}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    memory: state
  };
}

const mapDispatchToProps = { removeItem };

export default connect(mapStateToProps, mapDispatchToProps)(MemoryList);