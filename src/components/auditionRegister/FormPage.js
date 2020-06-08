import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const FormPage = () => {
return (
<MDBContainer>
      <form>
        <label className="grey-text">
          Your Name
        </label>
        <input type="text" className="form-control" />

        <br />

        <label className="grey-text">
          Your Email
        </label>
        <input type="text" className="form-control" />

        <br />

        <label className="grey-text">
          Your Phone Number
        </label>
        <input type="text" className="form-control" />

        <br />

        <label className="grey-text">
          UT TD Main-Stage Production Involvement
        </label>
        <p style={{fontSize: "10px"}}>Let us know if you are cast or crew
        for any main-stage productions in the UT Theatre & Dance productions. This
        helps us with scheduling for tech, dress, and show.</p>
        <input type="text" className="form-control" />

        <br />

        <label  className="grey-text">
          Maximum Number of Pieces
        </label>
        <p style={{fontSize: "10px"}}>Let us know the max number of
        pieces you feel that you can be cast in given your other commitments.
        This does not guarantee you will be cast in this many pieces.</p>
        <select className="browser-default custom-select">
          <option>Choose your option</option>
          <option value="1">1 Piece</option>
          <option value="2">2 Pieces</option>
        </select>

      </form>
</MDBContainer>
);
};

export default FormPage;
