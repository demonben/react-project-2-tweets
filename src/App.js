import React from 'react';
import './App.css';
import FormTweet from './components/FormTweet'
import ListTweets from './components/ListTweets';
import Loader from './components/loader';
import { getData } from './lib/api'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from './components/NavBar';
import Profile from "./components/Profile"
import TweetContext from "./TweetContext"


class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    tweets:[],
    isLoading:false,
  } 
}
componentDidMount(){
  this.loadTweets()
  setInterval(()=>{this.loadTweets()}, 2000)
}
async loadTweets(){
  this.setState({isLoading:true})
  const tweetFromServer = await getData()
  this.setState({ tweets: tweetFromServer, isLoading: false})
}

postTweet = async (value) =>{
  console.log(value)
  // postData()
}
  callBack(data){
  this.setState({tweets : JSON.parse(data)});
}
callBacker(){
  console.log('wp')
}
  addTweet(text,userName){
this.setState((prevState)=>{
  const tweet = {
    id: Date.now(),
    text: text,
    time: new Date()+"",
    userName:""
  }
  return{ 
    tweets: [...prevState.tweets, tweet]
  }
})
}
  userNameChanger(value) {
    this.setState({ userName: value });
    console.log(this.state.userName)
  
  }
render(){
  return (
    
    <div className="App">

      <Router>
        <NavBar></NavBar>
        <Switch>
          <Router path="/home">
            <FormTweet isButtonIsDisable={this.state.isLoading} dataForStorage={this.state.tweets} changeText={(text) => { this.addTweet(text) }} callBack={(data) => this.callBack(data)} userName={this.state.userName}/>
            {this.state.isLoading && <Loader></Loader>}
            <TweetContext.Provider value={this.state.tweets}>
            <ListTweets dataForList={this.state.tweets}></ListTweets>
            </TweetContext.Provider>
          </Router>
          <Router path="/profile">
            <Profile
              userNameChanger={(data)=>this.userNameChanger(data)}
             ></Profile>
          </Router>
        </Switch>
      </Router>

     
    </div>
  );

}
}

export default App;
