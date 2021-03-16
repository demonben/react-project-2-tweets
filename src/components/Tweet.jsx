import React from "react";

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  
    };
  }
render(){

    return (
      <div>
          <p>{this.props.tweet.userName}</p>
        <p>{this.props.tweet.date}</p>
        <p>{this.props.tweet.content}</p>
      </div>
    );
}
}

export default Tweet