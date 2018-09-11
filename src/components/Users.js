import React from 'react'
import ChatLayout from './chat_layout'

const Users = (props) => {
  return (
    <div className="Users">
    <div className="container">
      {Object.keys(props.users).map(el => <ChatLayout key={el} image={props.users[el].Img} name={props.users[el].displayName}>{props.users[el].userState}</ChatLayout>)}
    </div>
      <button onClick={props.handelSignOut} className="btn draw-border">SignOut</button>
    </div>
  )
}

export default Users
