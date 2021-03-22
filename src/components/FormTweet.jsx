import React from "react";
import { postData } from "../lib/api";

class FormTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      userName: "",
    };
  }

  changeInputText(value) {
    this.setState({ text: value });
  }
  formSubmit(event) {
    event.preventDefault();
    postData(this.state.text, this.state.userName);
  }
  componentDidMount() {
    let user = localStorage.getItem("username");

    this.setState({ userName: user });
  }
  render() {
    return (
      <div>
        <form
          onSubmit={(event) => {
            this.formSubmit(event);
          }}
        >
          <label className="label" htmlFor="text">
            <textarea
              placeholder="What you have in mind..."
              className="textarea"
              type="text"
              name="text"
              id="text"
              value={this.state.text}
              onChange={(event) => this.changeInputText(event.target.value)}
            ></textarea>
            <button
              className="button btn btn-primary"
              type="submit"
              disabled={
                this.state.text.length > 140 || this.props.isButtonIsDisable
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
