import React, { useState } from "react";
import FormTweet from "../components/FormTweet";
import ListTweets from "../components/ListTweets";
import Loader from "../components/loader";
// import { getData } from './lib/api'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import TweetContext from "../TweetContext";
import firebase from "firebase/app";
import "firebase/firestore";

export default function ChatRoom() {
  const [isLoading, setIsLoading] = useState(false);
  const [tweets, setTweets] = useState([]);
  const addTweet = async (date) => {
    console.log(date);
    await firebase.firestore().collection("messages").add(date);
  };
  return (
    <div className="App">
      <Router>
        <NavBar/>
          <Switch>
            <Router exact path="/">
              <FormTweet
                isButtonIsDisable={isLoading}
                dataForStorage={tweets}
                addTweet={(text) => addTweet(text)}
                // addTweet={addTweet}
                // userName={userName}
              />
              {isLoading && <Loader />}
              <TweetContext.Provider value={tweets}>
                <ListTweets tweets={tweets}></ListTweets>
              </TweetContext.Provider>
            </Router>
            <Router path="/profile">
              <Profile></Profile>
            </Router>
          </Switch>
      </Router>
    </div>
  );
}

