import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

const ClientContents = (props) => {
  return (
    <div>
      <div className="col-md-10 offset-md-1  jmbo">
        <Jumbotron fluid>
          <Container className="jmboctr">
            <h1 className="jmbttl">
              <strong>Welcome To MVB</strong>
            </h1>
            <h6>The Most Trusted Bank in India</h6>
            <hr />
          </Container>
          <Container>
            <div className="jmbpara">
              <p>
                MV Bank of India is an Indian multinational, public sector
                banking and financial services statutory body headquartered in
                Bangalore, Karnataka. MVB is the 30th largest bank in the world
                and ranked 27th in the Fortune Global 500 list of the world's
                biggest corporations of 2019.
              </p>
            </div>
          </Container>
          <Container>
            <div className="jmbpara">Your financial friend.</div>
          </Container>
        </Jumbotron>
      </div>
    </div>
  );
};

export default ClientContents;
