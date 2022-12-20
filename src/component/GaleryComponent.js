import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import gambar1 from "../assets/gambar1.png";
import gambar2 from "../assets/gambar2.png";
import gambar3 from "../assets/gambar3.png";
import gambar4 from "../assets/gambar4.png";
import gambar5 from "../assets/gambar5.png";
import gambar6 from "../assets/gambar6.png";
import gambar7 from "../assets/gambar7.png";
import gambar8 from "../assets/gambar8.png";
import gambar9 from "../assets/gambar9.png";
import gambar10 from "../assets/gambar10.png";
import gambar11 from "../assets/gambar11.png";
import gambar12 from "../assets/gambar12.png";
import gambar13 from "../assets/gambar13.png";
import gambar14 from "../assets/gambar14.png";

const GaleryComponent = () => {
  return (
    <div className="galery">
      <Container>
        <Row>
          <Col>
            <img src={gambar1} alt="" />
          </Col>
          <Col>
            <img src={gambar2} alt="" />
          </Col>
          <Col>
            <img src={gambar3} alt="" />
          </Col>
          <Col>
            <img src={gambar4} alt="" />
          </Col>
          <Col>
            <img src={gambar5} alt="" />
          </Col>
          <Col>
            <img src={gambar6} alt="" />
          </Col>
        </Row>
        <Row className="my-5">
          <Col>
            <img src={gambar7} alt="" />
          </Col>
          <Col>
            <img src={gambar8} alt="" />
          </Col>
          <Col>
            <img src={gambar9} alt="" />
          </Col>
          <Col>
            <img src={gambar10} alt="" />
          </Col>
          <Col>
            <img src={gambar11} alt="" />
          </Col>
          <Col>
            <img src={gambar12} alt="" />
          </Col>
        </Row>
        <Row className="my-5">
          <Col>
            <img src={gambar13} alt="" />
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default GaleryComponent;
