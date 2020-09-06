import React, { Component } from "react";
import { MDBBtn} from "mdbreact";
import { withRouter } from 'react-router-dom';
import "../index.css";
import RegisterAuditionee from './RegisterAuditionee'
import RegisterChoreographer from './RegisterChoreographer'

class Home extends Component {
  render() {
    return (
      <div>
        <RegisterAuditionee/>
        <RegisterChoreographer/>
        <div className="topSection">
        <p>Begin Casting</p>
        <MDBBtn outline color="black" onClick={event =>  window.location.href='/casting'}>Begin Casting</MDBBtn>
        </div>
      </div>
    );
  }
}

export default Home;
