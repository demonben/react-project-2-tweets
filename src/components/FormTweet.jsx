import React from "react";

class FormTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  componentDidUpdate() {
    console.log('hello world')
    localStorage.setItem("data", JSON.stringify(this.props.dataForStorage));
  }

  async componentDidMount(){
      console.log(this.props.dataForStorage);

    if (localStorage.length !== 0) {
      let data = await localStorage.getItem("data");
      console.log(data);
      this.props.callBack(data);
    }
  }

  changeInputText(value) {
    this.setState({ text: value });
    
  }
  formSubmit(event) {
    event.preventDefault();
    this.props.changeText(this.state.text);
    // console.log(this.props.dataForStorage.length);
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
            <button type="submit" disabled={this.state.text.length > 140}>
              Tweet
            </button>
          </label>
        </form>
      </div>
    );
  }
}
export default FormTweet;