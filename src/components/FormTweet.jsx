import React from "react";
import {postData} from "../lib/api"


class FormTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  // componentDidUpdate() {
  //   localStorage.setItem("data", JSON.stringify(this.props.dataForStorage));
  // }

  // async componentDidMount(){

  //   if (localStorage.length !== 0) {
  //     let data = await localStorage.getItem("data");

  //     this.props.callBack(data);
  //   }
  // }

  changeInputText(value) {
    this.setState({ text: value });
    
  }
  formSubmit(event) {
    event.preventDefault();
    postData(this.state.text)
    // this.postTweet(this.text)
    // this.props.changeText(this.state.text);
  }

  render() {
    return (
      <div>
        <form
          onSubmit={(event) => {
            this.formSubmit(event);
          }}
        >
          <label htmlFor="text">
            <textarea
              type="text"
              name="text"
              id="text"
              value={this.state.text}
              onChange={(event) => this.changeInputText(event.target.value)}
            ></textarea>
            <button
              type="submit"
              disabled={this.state.text.length > 140}
              postTweet={this.postTweet}
            >
              Tweet
            </button>
          </label>
        </form>
      </div>
    );
  }
}
export default FormTweet;