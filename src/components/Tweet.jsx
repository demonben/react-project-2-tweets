import React from "react";
// import TweetContext from "../TweetContext";


class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  
    };
  }
render(){

    return (
      <div className="tweet">
        <p>{this.props.tweet.userName}</p>
        <p>{this.props.tweet.date}</p>
        <p>{this.props.tweet.content}</p>
      </div>
    );
}
}

export default Tweet