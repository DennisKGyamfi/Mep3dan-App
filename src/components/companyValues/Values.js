import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LoremIpsum } from "react-lorem-ipsum";

import "./values.css";

const Values = () => {
  return (
    <>
      <Container className="hallmarkSection">
        <Row>
          <Col>
            <div className="sectionValue">
              <h3>Our Mission</h3>
              <p>
                <LoremIpsum p={1} avgSentencesPerParagraph={5} />
              </p>
            </div>
          </Col>
          <Col>
            <div className="sectionValue">
              <h3>Our Vision</h3>
              <p>
                <LoremIpsum p={1} avgSentencesPerParagraph={5} />
              </p>
            </div>
          </Col>
          <Col>
        <div className="sectionValue">
              <h3>Our Value</h3>
              <p>
                <LoremIpsum p={1} avgSentencesPerParagraph={5} />
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Values;
