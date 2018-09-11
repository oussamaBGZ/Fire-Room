import React from 'react'
import ChatLayout from './chat_layout'

const Chatting = (props) => {

  return (
    <div className="Chatting">
    <div className="display_chat">
    {Object.keys(props.chats).map(el => <ChatLayout key={el} image={props.chats[el].Img} name={props.chats[el].displayName}>{props.chats[el].chat}</ChatLayout>)}
    </div>
      <form onSubmit={props.handelSubmit}>
          <input type="text" name="chat" placeholder="Type a message" />
        </form>
    </div>
  )
}

export default Chatting
