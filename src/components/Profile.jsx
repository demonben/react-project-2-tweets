import React from "react";


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
    };
  }
  changUser(event) {
      event.preventDefault();
      this.setState({ userName: event });
      console.log(this.state.userName);
  }

  render() {
    return (
      <>
        <div>
          <h2>Profile</h2>
          <p>USER NAME</p>
          <form
            onSubmit={(event) => {
              this.changUser(event);
            }}
          >
            <label htmlFor="text">
              <textarea
                type="text"
                name="text"
                id="text"    
                onChange={(event) => this.setState({userName:event.target.value})}
              ></textarea>
              <button onClick={(x)=>this.props.userNameChanger(this.state.userName)}>
                Save
              </button>
            </label>
          </form>
        </div>
      </>
    );
  }
}
export default Profile;
