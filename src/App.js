import React from 'react';
import './App.css';
import FormTwit from './components/FormTwit'

class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    tweets:[]
  } 
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
  console.log(this.state.tweets)
  return (
    <div className="App">
      <FormTwit changeText={(text) => { this.addTweet(text)}}/>
    </div>
  );

}
}

export default App;
