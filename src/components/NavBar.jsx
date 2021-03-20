import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
      return(
      <div>
        <Link to="/home">Home</Link>
        <Link to="/profile">Profile</Link>
      </div>
      )
  }
}
export default NavBar;
