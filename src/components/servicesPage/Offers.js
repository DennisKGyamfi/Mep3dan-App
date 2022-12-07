import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LoremIpsum } from "react-lorem-ipsum";

import './offers.css'


const Offers = () => {
    return (  
        <>
            <Container className="hallmarkSection">
                <h3 className="servicesHeader">Choose Our Services</h3>
                <Row>
                    <Col>
                        <div className="sectionValue">
                            <h4>No Downpayment</h4>
                            <p>
                                <LoremIpsum p={1} avgSentencesPerParagraph={5} />
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="sectionValue">
                            <h4>All Cash Offer</h4>
                            <p>
                                <LoremIpsum p={1} avgSentencesPerParagraph={5} />
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="sectionValue">
                            <h4>Experts in Your Corner</h4>
                            <p>
                                <LoremIpsum p={1} avgSentencesPerParagraph={5} />
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="sectionValue">
                            <h4>Locked in Pricing</h4>
                            <p>
                                <LoremIpsum p={1} avgSentencesPerParagraph={5} />
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>            
        </>
      );
}
 
export default Offers;