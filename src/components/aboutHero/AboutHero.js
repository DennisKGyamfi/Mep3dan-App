import React from 'react';
import Figure from 'react-bootstrap/Figure';
import { LoremIpsum } from 'react-lorem-ipsum';
import Button from 'react-bootstrap/Button';
import './AboutHero.css';


const AboutHero = () => {
    return (
        <div className='about-HeroSection'>
            <div className='aboutSectionDiv'>
            <Figure>
                <Figure.Image
                className='imageFig'
                    width={500}
                    height={200}
                    alt="hands photo"
                    src="https://cdn.pixabay.com/photo/2020/05/31/10/22/give-5242150__340.jpg"
                />
                {/* <Figure.Caption>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Figure.Caption> */}
            </Figure>
            <section className="text-wrapper">
                <h2 className='header-wrapper'>Welcome To MepɛDan</h2>
            <p>
            <LoremIpsum p={2} />
             <Button variant="secondary" size="sm" active>
                Find properties
            </Button>
            </p>
            </section>
            </div>
            
        </div>
      );
}
 
export default AboutHero;