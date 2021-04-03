import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logout(event) {
    firebase.auth().signOut()
  }
  render() {
    return (
      <div className="navContainer">
        <ul className="barnav nav">
          <li className="">
            <Link className="nav-item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/profile">
              Profile
            </Link>
          </li>
          <li>
            <button
              className="btn btn-primary"
              onClick={(event) => {
                this.logout(event);
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
export default NavBar;
