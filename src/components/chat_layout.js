import React from 'react'

const chat_layout = ({ image, name, children }) => {
  return (
    <div className="chat_layout">
      <div>
        <img src={image} alt="" />
      </div>
      <div style={{ marginLeft: 20 }}>
        <i>{name}</i>
        <p>{children}</p>
      </div>
    </div>
  )
}

export default chat_layout
