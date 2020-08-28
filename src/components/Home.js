import React, { Component } from "react";
import "../index.css";
import RegisterAuditionee from './RegisterAuditionee'
import RegisterChoreographer from './RegisterChoreographer'

class Home extends Component {

  render() {

    return (
      <div>
        <RegisterAuditionee/>
        <RegisterChoreographer/>
      </div>
    );
  }
}

export default Home;
