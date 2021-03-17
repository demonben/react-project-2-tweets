import React from "react";
import Tweet from "./Tweet";

class ListTweets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {this.props.dataForList.map((tweet, index) => (
          <Tweet key={tweet.id} tweet={tweet} index={index}></Tweet>
        ))}
      </div>
    );
  }
}

export default ListTweets;
