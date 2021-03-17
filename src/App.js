import React from 'react';
import './App.css';
import FormTweet from './components/FormTweet'
import ListTweets from './components/ListTweets';
import Tweet from './components/Tweet';
import { getData } from './lib/api'
import { postData} from "./lib/api"


class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    tweets:[]
  } 
}
componentDidMount(){
  this.loadTweets()
  setInterval(()=>{this.loadTweets()}, 1500)
}
async loadTweets(){
  const tweetFromServer = await getData()
  this.setState({ tweets: tweetFromServer})
}

postTweet = async (value) =>{
  console.log(value)
  // postData()
}
  callBack(data){
  this.setState({tweets : JSON.parse(data)});
}

  addTweet(text){
this.setState((prevState)=>{
  const tweet = {
    id: Date.now(),
    text: text,
    time: new Date()+""
  }

  return{ 
    tweets: [...prevState.tweets, tweet]
  }
})
}


render(){
  return (
    <div className="App">
      <FormTweet dataForStorage={this.state.tweets} changeText={(text) => { this.addTweet(text) }} callBack={(data) => this.callBack(data)}/>
      <ListTweets dataForList={this.state.tweets}></ListTweets>
    </div>
  );

}
}

export default App;
