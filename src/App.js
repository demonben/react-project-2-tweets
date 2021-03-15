import React from 'react';
import './App.css';
import FormTweet from './components/FormTweet'
import ListTweets from './components/ListTweets';
import Tweet from './components/Tweet';

class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    tweets:[]
  } 
}
  callBack(data){
  this.setState({tweets : JSON.parse(data)});
  console.log(this.state.tweets)
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
