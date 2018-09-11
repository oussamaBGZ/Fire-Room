import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
const provider = new firebase.auth.GoogleAuthProvider();

const Home = (props) => {

  const handelClick = () => {
    firebase.auth().signInWithPopup(provider).then(() => {
      props.history.push('/Chat_room')
    }).catch(function(error) {
       console.log(error.message)
    });
  }
  return (
    <div className="home">
    <h1>Welcome To Fire Room</h1>
    <div>
          <img src="http://www.androidpolice.com/wp-content/themes/ap2/ap_resize/ap_resize.php?src=http%3A%2F%2Fwww.androidpolice.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fnexus2cee_Search-Thumb-150x150.png&w=150&h=150&zc=3" alt="" /> 
        <button onClick={handelClick} className="loginBtn">Login with Google</button>
    </div>
    </div>
  )
}

export default Home


