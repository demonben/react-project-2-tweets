import React from "react";

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="tweet">
        <div className="userAndDate">
          <p>{this.props.tweet.userName}</p>
          <p>{this.props.tweet.date}</p>
        </div>
        <div className="content">
          <p>{this.props.tweet.content}</p>
        </div>
      </div>
    );
  }
}

export default Tweet;
