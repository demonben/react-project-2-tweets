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
  }
  putUserNameInLocalStorage() {
    localStorage.setItem("username", this.state.userName);
  }
  render() {
    return (
      <>
        <div className="profileContainer">
          <h2 className="headerProfile">Profile</h2>
          <p className="profile">USER NAME</p>
          <form
            onSubmit={(event) => {
              this.changUser(event);
            }}
          >
            <label htmlFor="text">
              <textarea
                className="inputUser"
                type="text"
                name="text"
                id="text"
                onChange={(event) =>
                  this.setState({ userName: event.target.value })
                }
              ></textarea>
              <p>
                <button
                  className=" btn btn-primary"
                  onClick={() => this.putUserNameInLocalStorage()}
                >
                  Save
                </button>
              </p>
            </label>
          </form>
        </div>
      </>
    );
  }
}
export default Profile;
