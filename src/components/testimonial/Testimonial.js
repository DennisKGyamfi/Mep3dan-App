import React from 'react';
import './testimonial.css';
import Card from 'react-bootstrap/Card';

const Testimonial = () => {
    return (
        <div className='testimonialSection'>
            <h3>TESTIMONIAL</h3>
            <div className='card-Section'>
            <Card >
                
                <Card.Body>
                    <Card.Text className='card-text'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>

                <span className='cardImgSection'>
                    <Card.Img className='card-img' src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                <Card.Title className='card-title'>Jonas Cruz</Card.Title>
                </span>
            </Card>
            <Card >

                <Card.Body>
                    <Card.Text className='card-text'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>

                <span className='cardImgSection'>
                    <Card.Img className='card-img' src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                    <Card.Title className='card-title'>Jonathan Davis</Card.Title>
                </span>
            </Card>
            </div>
        </div>
    );
}
 
export default Testimonial;