import React from 'react';
import AboutHeader from '../components/aboutHeader/AboutHeader';
import AboutHero from '../components/aboutHero/AboutHero';
import Values from '../components/companyValues/Values';
import Stat from '../components/propertyStat/Stat';
import Testimonial from '../components/testimonial/Testimonial';



const About = () => {
    return ( 
        <>
        <AboutHeader />
        <AboutHero />
        <Stat />
        <Values />
        <Testimonial />
        
        </>
     );
}
 
export default About;