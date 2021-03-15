import React from "react";

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  
    };
  }
render(){
    // console.log(this.props.tweet);

    // {
    //   this.state.text;
    // }
    return (
      <div>
          <p>Dima</p>
        <p>{this.props.tweet.time}</p>
        <p>{this.props.tweet.text}</p>
      </div>
    );
}
}

export default Tweet