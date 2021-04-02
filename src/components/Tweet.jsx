// import React from "react";
import {useEffect, useState} from 'react'
import firebase from 'firebase/app'

const Tweet = (props) =>{
const [sender,setSender] = useState(null)
const { tweet } = props;
const {senderId} = tweet;
useEffect(() => {
  firebase
    .firestore()
    .collection("users")
    .doc(senderId)
    .get()
    .then(doc => {
      const sender = {
        ...doc.data(),
        id: doc.id,
      };
      setSender(sender);
    });
}, [senderId]);
return (
  <div className="tweet">
    <div className="userAndDate">
      <p>{sender ?sender.name :""}</p>
      <p>{props.tweet.date}</p>
    </div>
    <div className="content">
      <p>{props.tweet.content}</p>
    </div>
  </div>
);
}


// class Tweet extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <div className="tweet">
//         <div className="userAndDate">
//           <p>{this.props.tweet.senderId}</p>
//           <p>{this.props.tweet.date}</p>
//         </div>
//         <div className="content">
//           <p>{this.props.tweet.content}</p>
//         </div>
//       </div>
//     );
//   }
// }

export default Tweet;
