import React, { Component } from "react";
import { MDBBtn, MDBContainer, MDBModal, MDBModalBody, MDBModalHeader} from "mdbreact";
import "../index.css";
import FormPage from "./auditionRegister/FormPage.js"
import QueryList from "./QueryList.js"

class Home extends Component {

  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            R O O T S
          </p>
          <MDBBtn outline color="white" onClick={this.toggle}>Register</MDBBtn>
        </header>

        <MDBContainer>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}   size="lg"  >
            <MDBModalHeader toggle={this.toggle}>Register To Audition</MDBModalHeader>
            <MDBModalBody>
              <FormPage />
            </MDBModalBody>
          </MDBModal>
        </MDBContainer>

        <QueryList/>
      </div>
    );
  }
}

export default Home;
