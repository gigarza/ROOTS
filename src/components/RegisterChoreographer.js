import React, { Component } from "react";
import { MDBBtn, MDBContainer, MDBModal, MDBModalBody, MDBModalHeader} from "mdbreact";
import "../index.css";
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import BasicQuery from './BasicQuery'

class RegisterChoreographer extends Component {

    state = {    
        name: '',
        email: '',
        phone: '',
        modal: false
    };

    toggle = () => {
    this.setState({
        modal: !this.state.modal
    });
    }

    endChoreographerRegister = () => {
        this.setState({
          name: '',
          email: '',
          phone: ''
        });
      }

    render() {

        const { name, email, phone } = this.state

        return(
            <div>
                <div className="topSection">
                    <p>Choreographer Section</p>
                    <MDBBtn outline color="black" onClick={this.toggle}>Register Choreographer</MDBBtn>
                </div>

                <MDBContainer>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}  size="lg"  >
                <MDBModalHeader toggle={this.toggle}>Register A Choreographer</MDBModalHeader>
                <MDBModalBody>
                    <MDBContainer>
                        <form id="auditionee-form">
                            <label className="grey-text">Name</label>
                            <input type="text"
                            className="form-control"
                            value={name}
                            onChange={e => this.setState({ name: e.target.value })}/>

                            <br />

                            <label className="grey-text">Email</label>
                            <input type="text"
                            className="form-control"
                            value={email}
                            onChange={e => this.setState({ email: e.target.value })}/>

                            <br />

                            <label className="grey-text">Phone Number</label>
                            <input type="text"
                            className="form-control"
                            value={phone}
                            onChange={e => this.setState({ phone: e.target.value })}/>
                            
                            <div className="text-center mt-4">
                            <MDBBtn color="unique" type="submit">Register</MDBBtn>
                            </div>

                        </form>
                    </MDBContainer>
                </MDBModalBody>
                </MDBModal>
                </MDBContainer>
            </div>
        );
    }
}

export default RegisterChoreographer;