import React from "react";
import { Container, Card } from "react-bootstrap";
import port1 from "../assets/portfolio1.png";
import port2 from "../assets/portfolio2.png";
import port3 from "../assets/portfolio4.png";

const PortfolioComponent = () => {
  return (
    <div className="portfolio my-5">
      <Container>
        <p className="text-center">Portfolio</p>
        <h3 className="text-center">
          {" "}
          The software that we build takes our clients to the next level
        </h3>
        <br />
        <div className="row">
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={port1} />
              <Card.Body>
                <Card.Title>ILIOS app (B2B E-Commerce)</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={port2} />
              <Card.Body>
                <Card.Title>Home and Living</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={port3} />
              <Card.Body>
                <Card.Title>Hippo</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          </div>
        </div>
        <div className="text-center">
          <a
            href="booknow"
            className="btn btn-warning learn"
            style={{
              borderRadius: "25px",
              fontSize: "10px",
              padding: "1em 3em",
              margin: "1em",
            }}
          >
            <b>Learn more</b>
          </a>
        </div>
      </Container>
      <br />
    </div>
  );
};

export default PortfolioComponent;
