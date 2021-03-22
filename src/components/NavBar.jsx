import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="navContainer">
        <ul className="barnav nav">
          <li className="">
            <Link className="nav-item" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/profile">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default NavBar;
