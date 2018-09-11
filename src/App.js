import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/database'
import Users from './components/Users'
import Chatting from './components/Chatting'

export default class App extends Component {

  state = {
    messages: {},
    Connected: {}
  }

  componentDidMount(){
    firebase.database().ref().on('value', (snapshot) => {
      this.setState({
        messages: snapshot.val().messages,
        Connected: snapshot.val().Connected
      }, () => console.log(firebase.auth().currentUser))
    })

    firebase.database().ref('Connected/'+firebase.auth().currentUser.uid).set({
      displayName: firebase.auth().currentUser.displayName,
      Img: firebase.auth().currentUser.photoURL,
      userState: "Conected..."
    })
  }

  handelSignOut= () => {
    firebase.database().ref('Connected/'+firebase.auth().currentUser.uid).update({
      userState: "Deconected..."
    }, () => {
      firebase.auth().signOut().then(() => {
        this.props.history.push('/')
      }).catch(function(error) {
        console.log(error)
      });
    })
  }

  handelSubmit = (e) => {
    e.preventDefault()
    firebase.database().ref('messages').push({
      displayName: firebase.auth().currentUser.displayName,
      Img: firebase.auth().currentUser.photoURL,
      chat: e.target.chat.value
    })
    e.currentTarget.reset()
  }

  render() {
    return (
      <div className="App">
        <Users handelSignOut={this.handelSignOut} users={this.state.Connected}/>
        <Chatting handelSubmit={this.handelSubmit} chats={this.state.messages} />
      </div>
    )
  }
}
