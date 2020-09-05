import React, { Component } from "react";
import { MDBBtn, MDBContainer, MDBModal, MDBModalBody, MDBModalHeader} from "mdbreact";
import "../index.css";
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import BasicChoreographerQuery from './BasicChoreographerQuery'

const CHOREOGRAPHER_REGISTER = gql`
  mutation createChoreographer($name: String!, $email: String!, $phone: String!) {
    createChoreographer(name: $name, email: $email, phone: $phone) {
      name,
      email,
      phone
    }
  }
`

const ALL_CHOREOGRAPHER = gql`
{
  allChoreographer {
    edges {
      node {
        id
        name
        email
        phone
      }
    }
  }
}
`

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
                        <form id="choreographer-form">
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
                                <Mutation mutation={CHOREOGRAPHER_REGISTER} onCompleted={this.endChoreographerRegister}>
                                    {(createChroeographer, { data }) =>
                                    <MDBBtn color="unique" type="submit" onClick={(e) => {
                                        e.preventDefault();
                                        this.toggle()
                                        createChroeographer({
                                            variables: { name: name, email: email, phone: phone},
                                            refetchQueries: [{ query: ALL_CHOREOGRAPHER}]
                                        })
                                        }}>
                                        Register
                                    </MDBBtn>
                                            }
                                </Mutation>
                            </div>

                        </form>
                    </MDBContainer>
                </MDBModalBody>
                </MDBModal>
                </MDBContainer>

                <Query query={ALL_CHOREOGRAPHER}>
                    {({ loading, error, data }) => {
                        if (loading) return <div>Fetching</div>
                        if (error) return <div>Error</div>
                        
                        const choreographersToRender = data.allChoreographer.edges
                        
                        return (
                            <div>
                                {choreographersToRender.map(choreographer => <BasicChoreographerQuery key={choreographer.node.id} choreographer={choreographer.node} />)}
                            </div>
                        )
                    }}
                </Query>
            </div>
        );
    }
}

export default RegisterChoreographer;