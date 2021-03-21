import React from "react";
import {postData} from "../lib/api"


class FormTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  changeInputText(value) {
    this.setState({ text: value });
    
  }
  formSubmit(event) {
    event.preventDefault();
    postData(this.state.text,this.props.userName)

  }
  render() {
    // {console.log(
    //   this.props.isButtonIsDisable)
    // }
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
              disabled={
                this.state.text.length > 140 ||  this.props.isButtonIsDisable
              }
              // postTweet={this.postTweet}
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