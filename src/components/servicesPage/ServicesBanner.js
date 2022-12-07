import React from "react";
import Carousel from 'react-bootstrap/Carousel';


const ServicesBanner = () => {
    return ( 
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2020/10/15/15/09/realtor-5657001_960_720.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Services</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2022/03/14/20/42/real-estate-7068988_960_720.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Services</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        </>
     );
}
 
export default ServicesBanner;