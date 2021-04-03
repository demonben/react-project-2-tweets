import React from "react";
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

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      isLoading: false,
    };
  }
  async addTweet(data) {
    console.log(data);
    await firebase.firestore().collection("messages").add(data);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const unsubscribe = firebase
      .firestore()
      .collection("messages")
      .limit(10)
      .orderBy("date", "desc")
      .onSnapshot((snap) => {
        const messages = snap.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        this.setState({ tweets: messages, isLoading: false });
      });
    return () => {
      unsubscribe();
    };
  }
 userImageChanger(data) {
console.log(data)
  }
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Router exact path="/">
              <FormTweet
                isButtonIsDisable={this.state.isLoading}
                dataForStorage={this.state.tweets}
                addTweet={(text) => this.addTweet(text)}
                addTweet={this.addTweet}
                userName={this.state.userName}
                // updateTweets={this.updateTweets}
              />
              {this.state.isLoading && <Loader></Loader>}
              <TweetContext.Provider value={this.state.tweets}>
                <ListTweets
                // dataForList={this.state.tweets}
                ></ListTweets>
              </TweetContext.Provider>
            </Router>
            <Router path="/profile">
              <Profile
                userImageChanger={(data) => this.userImageChanger(data)}
              ></Profile>
            </Router>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default ChatRoom;