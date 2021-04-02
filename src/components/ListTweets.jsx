import React from "react";
import Tweet from "./Tweet";
import TweetContext from "../TweetContext";


// refactor in to hooks mb 
function ListTweets() {
  return (
    <TweetContext.Consumer>
      {(tweets) => (
        <div className="tweetList">
          {/* {console.log(tweets)} */}
          {tweets.map((tweet, index) => {
            return <Tweet key={tweet.id} tweet={tweet} index={index}></Tweet>;
          })}
        </div>
      )}
    </TweetContext.Consumer>
  );
}

export default ListTweets;
