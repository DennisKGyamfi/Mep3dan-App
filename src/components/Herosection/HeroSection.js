import React from 'react';
import './Hero.css';
import Carousel from 'react-bootstrap/Carousel';


const HeroSection = () => {
    return (
     <div className='heroSection'>
            <Carousel fade className='carousel'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60text=First slide&bg=373940"
                        alt="First slide"
                    />
                    <Carousel.Caption className='carouselCaption'>
                      <h3>Find Your New Home Here</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60text=Second slide&bg=282c34"
                        alt="Whatever Your Budget, We have a place for You"
                    />

                    <Carousel.Caption className='carouselCaption'>
                        <h3> Search for homes at Your Comfort</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg?w=740&t=st=1665576521~exp=1665577121~hmac=8f38039437f50e0f0df632a537d3e5b975c4c7c8f4d6933edfdef638c6db55f2"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='carouselCaption'>
                        <h3>A Stable Home in a Peaceful environment for You and Your Family</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="Fourth slide"
                    />

                    <Carousel.Caption className='carouselCaption'>
                        <h3> Sign Up to enlist Your Property</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 
     </div>

    );
}
 
export default HeroSection;