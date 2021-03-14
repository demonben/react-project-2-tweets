import React from "react";

class FormTwit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  changeInputText(value) {
    this.setState({ text: value });
    // console.log(this.state.text);
  }
  formSubmit(event){
      event.preventDefault();
this.props.changeText(this.state.text)
console.log(this.state.text);
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
            <button type="submit" disabled={this.state.text.length>140}>
              Tweet
            </button>
          </label>
        </form>
      </div>
    );
  }
}
export default FormTwit