import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './properties.css';



const Properties = (props) => {
    return (
        <div className='properties'>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={props.img} />
                            <Card.Body>
                                <Card.Title>{props.title}</Card.Title>
                                <Card.Text>
                                    {props.details}
                                </Card.Text>
                                <Button variant="secondary">{props.button} </Button>
                            </Card.Body>

                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    );
}

export default Properties;