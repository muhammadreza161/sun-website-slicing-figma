import React from "react";
import { Card } from "react-bootstrap";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";

const CardComponent = () => {
  return (
    <div className="container mb-5 cost">
      <div className="row justify-content-center costum-card ">
        <div className="col-12 text-center mb-5">
          <p>Complete Package</p>
          <h4>From product design to software continuous delivery</h4>
        </div>

        <div className="col-4">
          <Card>
            <Card.Img style={{ width: "90px", padding: "1em" }} src={icon1} />
            <Card.Body>
              <Card.Title>Website development</Card.Title>
              <Card.Text>
                High-performance web applications that grow with your business
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-4">
          <Card>
            <Card.Img style={{ width: "68px", padding: "1em" }} src={icon2} />
            <Card.Body>
              <Card.Title>Mobile apps development</Card.Title>
              <Card.Text>
                Mobile app also become central role in the day-to-day operations
                of the business.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-4">
          <Card>
            <Card.Img style={{ width: "80px", padding: "1em" }} src={icon3} />
            <Card.Body>
              <Card.Title>Digital product design</Card.Title>
              <Card.Text>
                Complete digital product creations from UX prototyping to final
                UI designs
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-4 mt-4">
          <Card>
            <Card.Img style={{ width: "80px", padding: "1em" }} src={icon4} />
            <Card.Body>
              <Card.Title>Maintanance</Card.Title>
              <Card.Text>
                Maintaining a scalable and secure architecture.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4 mt-4">
          <Card>
            <Card.Img style={{ width: "62px", padding: "1em" }} src={icon5} />
            <Card.Body>
              <Card.Title>CMS development</Card.Title>
              <Card.Text>
                Developing a resilient software architecture centered on
                scalability
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4 mt-4">
          <Card>
            <Card.Img style={{ width: "90px", padding: "1em" }} src={icon6} />
            <Card.Body>
              <Card.Title>Integrated Payment Gateway</Card.Title>
              <Card.Text>
                Simplify the payment system with just one step
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
