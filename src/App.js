// import FormTweet from './components/FormTweet'
// import ListTweets from './components/ListTweets';
// import Loader from './components/loader';
// import { getData } from './lib/api'
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import NavBar from './components/NavBar';
// import Profile from "./components/Profile"
// import TweetContext from "./TweetContext"
import React, { useEffect } from 'react';
import './App.css';
import firebase from 'firebase/app'
import 'firebase/auth';
import "firebase/firestore";
import ChatRoom from './components/ChatRoom';
import { useState } from 'react'
import Login from './components/Login';
import { AuthContext } from './context/AuthContext'

const firebaseConfig = {
  apiKey: "AIzaSyDQouy5q062oDwB6vnAjZHNkKmmoai0Am0",
  authDomain: "react-tweet-chat-app.firebaseapp.com",
  projectId: "react-tweet-chat-app",
  storageBucket: "react-tweet-chat-app.appspot.com",
  messagingSenderId: "133390260418",
  appId: "1:133390260418:web:ab734352e04df23897c35b"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const [authUser, setAuthUser] = useState(null)
  const login = async (authUser) => {
    setAuthUser(authUser);
    await firebase.firestore()
      .collection('users')
      .doc(authUser.uid)
      .set({ name: authUser.displayName });
  }
  useEffect(() => {
    // firebase.auth().signOut()
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    });
  }, []);
  return (
    // <div className="App"></div>
    <AuthContext.Provider value={{
      authUser,
      login,
      logout: () => setAuthUser(null)
    }}>
      {!authUser && <Login />}
      {authUser && <ChatRoom />}
    </AuthContext.Provider>
  )
}

export default App;
 // <div className="App">
  //       <Router>
  //         <NavBar />
  //         <Switch>
  //           <Router exact path="/">
  //             <FormTweet
  //               isButtonIsDisable={this.state.isLoading}
  //               dataForStorage={this.state.tweets}
  //               addTweet={(text) => this.addTweet(text)}
  //               addTweet={this.addTweet}
  //               userName={this.state.userName}
  //             // updateTweets={this.updateTweets} 
  //             />
  //             {this.state.isLoading && <Loader></Loader>}
  //             <TweetContext.Provider value={this.state.tweets}>
  //               <ListTweets
  //               // dataForList={this.state.tweets}
  //               ></ListTweets>
  //             </TweetContext.Provider>
  //           </Router>
  //           <Router path="/profile">
  //             <Profile
  //             // userNameChanger={(data) => this.userNameChanger(data)}
  //             ></Profile>
  //           </Router>
  //         </Switch>
  //       </Router>
  //     </div>