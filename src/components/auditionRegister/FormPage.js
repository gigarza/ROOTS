import React, { Component } from "react";
import { MDBContainer, MDBBtn} from 'mdbreact';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const POST_MUTATION = gql`
  mutation createAuditionee($name: String!, $email: String!, $phone: String!, $maxPieces: Int!, $number: Int!) {
    createAuditionee(name: $name, email: $email, phone: $phone, maxPieces: $maxPieces, number: $number) {
      name,
      email,
      phone,
      maxPieces,
      number
    }
  }
`

class FormPage extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    maxPieces: '',
    number: '',
  }

  render() {

    const { name, email, phone, maxPieces, number } = this.state

    return (
      <MDBContainer>
            <form>
              <label className="grey-text">
                Your Name
              </label>
              <input type="text"
              className="form-control"
              value={name}
              onChange={e => this.setState({ name: e.target.value })}/>

              <br />

              <label className="grey-text">
                Your Email
              </label>
              <input type="text"
              className="form-control"
              value={email}
              onChange={e => this.setState({ email: e.target.value })}/>

              <br />

              <label className="grey-text">
                Your Phone Number
              </label>
              <input type="text"
              className="form-control"
              value={phone}
              onChange={e => this.setState({ phone: e.target.value })}/>

              <br />

              <label className="grey-text">
                UT TD Main-Stage Production Involvement
              </label>
              <p style={{fontSize: "10px"}}>Let us know if you are cast or crew
              for any main-stage productions in the UT Theatre & Dance productions. This
              helps us with scheduling for tech, dress, and show.</p>
              <input type="text"
              className="form-control"
              value={number}
              onChange={e => this.setState({ number: e.target.value })}/>

              <br />

              <label  className="grey-text">
                Maximum Number of Pieces
              </label>
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
              <Mutation mutation={POST_MUTATION}>
                {(createAuditionee, { data }) =>
                  <MDBBtn color="unique" onClick={(e) => {
                    e.preventDefault();
                    createAuditionee({
                      variables: { name: name, email: email, phone: phone, maxPieces: maxPieces, number: number}
                    })
                  }}>
                    Register
                  </MDBBtn>
                }
              </Mutation>
              </div>

            </form>
      </MDBContainer>
    );
  }
}

export default FormPage;
