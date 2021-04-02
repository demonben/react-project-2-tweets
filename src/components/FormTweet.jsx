import React from "react";
import {useContext, useState} from 'react'
import { AuthContext } from "../context/AuthContext"
import { postData, getData } from "../lib/api";

const FormTweet = (props) => {
  const authContext = useContext(AuthContext);
  const { onNewMessage } = props;
  const [text, setText] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();
      const tweet = {
        content: text,
        date: new Date().toString(),
        senderId: authContext.authUser.uid,
      };
      props.addTweet(tweet);
  };
   const changeInputText=(value) => {
    setText(value)
  }
  return (
    <div>
      <form
        onSubmit={(event) => {
          formSubmit(event);
        }}
      >
        <label className="label" htmlFor="text">
          <textarea
            placeholder="What you have in mind..."
            className="textarea"
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(event) => changeInputText(event.target.value)}
          ></textarea>
          <button
            className="button btn btn-primary"
            type="submit"
            disabled={text.length > 140 || props.isButtonIsDisable}
          >
            Tweet
          </button>
        </label>
      </form>
    </div>
  );
};


// class FormTweet extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "",
//       userName: "",
//     };
//   }
//     // const authContext = useContext(AuthContext);

//   changeInputText(value) {
//     this.setState({ text: value });
//   }
//   formSubmit(event) {
//     event.preventDefault();
//   this.setState(() => {
//     const tweet = {
//       id: Date.now(),
//       content: this.state.text,
//       date: new Date().toString(),
//       userName: this.state.userName,
//     };
//     this.props.addTweet(tweet);
//   });
// }    

//   // componentDidMount() {
//   //   const user = localStorage.getItem("username");
//   //   this.setState({ userName: user });
//   // }
//   render() {
//     return (
//       <div>
//         <form
//           onSubmit={(event) => {
//             this.formSubmit(event);
//           }}
//         >
//           <label className="label" htmlFor="text">
//             <textarea
//               placeholder="What you have in mind..."
//               className="textarea"
//               type="text"
//               name="text"
//               id="text"
//               value={this.state.text}
//               onChange={(event) => this.changeInputText(event.target.value)}
//             ></textarea>
//             <button
//               className="button btn btn-primary"
//               type="submit"
//               disabled={
//                 this.state.text.length > 140 || this.props.isButtonIsDisable
//               }
//             >
//               Tweet
//             </button>
//           </label>
//         </form>
//       </div>
//     );
//   }
// }
export default FormTweet;
