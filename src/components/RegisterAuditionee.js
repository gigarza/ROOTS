import React, { Component } from "react";
import { MDBBtn, MDBContainer, MDBModal, MDBModalBody, MDBModalHeader} from "mdbreact";
import "../index.css";
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import BasicQuery from './BasicQuery'

const AUDITIONEE_REGISTER = gql`
  mutation createAuditionee($name: String!, $email: String!, $phone: String!, $productions: String!, $maxPieces: Int!, $number: Int!) {
    createAuditionee(name: $name, email: $email, phone: $phone, productions: $productions, maxPieces: $maxPieces, number: $number) {
      name,
      email,
      phone,
      productions,
      maxPieces,
      number
    }
  }
`

const ALL_AUDITIONEE = gql`
{
  allAuditionee {
    edges {
      node {
        id
        name
        email
        phone
        maxPieces
        number
      }
    }
  }
}
`

class RegisterAuditionee extends Component {

  state = {
    name: '',
    email: '',
    phone: '',
    productions: '',
    maxPieces: '',
    modal: false,
    auditionNumber: 1
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  endAuditioneeRegister = () => {
    this.setState({
      name: '',
      email: '',
      phone: '',
      productions: '',
      maxPieces: '',
      auditionNumber: this.state.auditionNumber + 1
    });
  }

  render() {

    const { name, email, phone, productions, maxPieces, auditionNumber } = this.state

    return (
      <div>
        <div className="topSection">
        <p className="header">R O O T S</p>
        <MDBBtn outline color="black" onClick={this.toggle}>Register Auditionee</MDBBtn>
        </div>

        <MDBContainer>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}  size="lg"  >
            <MDBModalHeader toggle={this.toggle}>Register To Audition</MDBModalHeader>
            <MDBModalBody>
              <MDBContainer>
                    <form id="auditionee-form">
                      <label className="grey-text">Your Name</label>
                      <input type="text"
                      className="form-control"
                      value={name}
                      onChange={e => this.setState({ name: e.target.value })}/>

                      <br />

                      <label className="grey-text">Your Email</label>
                      <input type="text"
                      className="form-control"
                      value={email}
                      onChange={e => this.setState({ email: e.target.value })}/>

                      <br />

                      <label className="grey-text">Your Phone Number</label>
                      <input type="text"
                      className="form-control"
                      value={phone}
                      onChange={e => this.setState({ phone: e.target.value })}/>

                      <br />

                      <label className="grey-text">UT TD Main-Stage Production Involvement</label>
                      <p style={{fontSize: "10px"}}>Let us know if you are cast or crew
                      for any main-stage productions in the UT Theatre & Dance productions. This
                      helps us with scheduling for tech, dress, and show.</p>
                      <input type="text"
                      className="form-control"
                      value={productions}
                      onChange={e => this.setState({ productions: e.target.value })}/>

                      <br />

                      <label  className="grey-text">Maximum Number of Pieces</label>
                      <p style={{fontSize: "10px"}}>Let us know the max number of
                      pieces you feel that you can be cast in given your other commitments.
                      This does not guarantee you will be cast in this many pieces.</p>
                      <select className="browser-default custom-select"
                      value={maxPieces}
                      onChange={e => this.setState({ maxPieces: e.target.value })}>
                        <option>Choose your option</option>
                        <option value="1">1 Piece</option>
                        <option value="2">2 Pieces</option>
                      </select>

                      <div className="text-center mt-4">
                      <Mutation mutation={AUDITIONEE_REGISTER} onCompleted={this.endAuditioneeRegister}>
                        {(createAuditionee, { data }) =>
                          <MDBBtn color="unique" type="submit" onClick={(e) => {
                            e.preventDefault();
                            this.toggle()
                            createAuditionee({
                              variables: { name: name, email: email, phone: phone, productions: productions, maxPieces: maxPieces, number: auditionNumber},
                              refetchQueries: [{ query: ALL_AUDITIONEE }]
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

        <Query query={ALL_AUDITIONEE} onCompleted={data => this.setState({ auditionNumber: data.allAuditionee.edges.length + 1 })}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>

            const auditoneesToRender = data.allAuditionee.edges

            console.log(this.state.auditionNumber)
            return (
              <div>
                {auditoneesToRender.map(auditionee => <BasicQuery key={auditionee.node.id} auditionee={auditionee.node} />)}
              </div>
            )
          }}
        </Query>
      </div>
    );
  }
}

export default RegisterAuditionee;
