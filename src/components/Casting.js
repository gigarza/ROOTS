import React, { Component } from "react";
import { MDBBtn} from "mdbreact";
import "../index.css";

class Casting extends Component {

  render() {
    return (
      <div>
        <div className="topSection">
        <p>Casting page!</p>
        <MDBBtn outline color="black" onClick={event =>  window.location.href='/'}>Back Home</MDBBtn>
        </div>
      </div>
    );
  }
}

export default Casting;
