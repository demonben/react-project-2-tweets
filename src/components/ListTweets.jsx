import React from "react";
import Tweet from "./Tweet";

class ListTweets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(this.props.dataForList);
    return (
      <div>
        {/* {console.log(this.props.dataForList)} */}
        {this.props.dataForList.reverse().map((tweet, index) => (
          <Tweet key={tweet.id} tweet={tweet} index={index}></Tweet>
        ))}
      </div>
    );
  }
}

export default ListTweets;
