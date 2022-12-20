import React from "react";
import { Container, Row } from "react-bootstrap";

const HeroComponent = () => {
  return (
      <div>
          <div className="hero min-vh-100">   
          <Container>
              <Row>
                  <div className="col-12 col-lg-4 costum-section">
                      <h1><b> Build or scale up </b></h1><br/>
                      <h1>your development team</h1><br/>
                      <p>in weeks, not months</p>
                      <a href="booknow" className="btn btn-warning contact-btn" ><b>Book now</b></a>
                  </div>
              </Row>
          </Container>
          </div>
      </div>
      
        
  );
};

export default HeroComponent;
