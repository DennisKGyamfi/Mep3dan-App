import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './AboutHeader.css';


const AboutHeader = () => {
    return ( 
        <div className='about-headerSection'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2019/09/25/13/54/build-a-house-4503738_960_720.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='aboutHeader'>About Us</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2019/01/30/08/14/house-3963987_960_720.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='aboutHeader'>About Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
     );
}
 
export default AboutHeader;