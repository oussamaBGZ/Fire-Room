import React from 'react'
import {  BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Home from './Home'
import App from './App'
import firebase from 'firebase/app'
import 'firebase/auth'
import P404 from './404'

// Initialize Firebase put your firebase Key here:
const config = {
  apiKey: " ",
  authDomain: " ",
  databaseURL: " ",
  projectId: " ",
  storageBucket: " ",
  messagingSenderId: " "
};
firebase.initializeApp(config);

const Routing = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Chat_Room" render={(props) => firebase.auth().currentUser ? <App {...props} /> : <Redirect to="/" />} />
            <Route component={P404}/>
        </Switch>
    </BrowserRouter>
  )
}
export default Routing
