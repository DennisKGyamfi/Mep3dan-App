import React from 'react';
import HeroSection from '../components/Herosection/HeroSection';
import SearchPanel from '../components/searchPanel/Search';
import Gallery from '../components/properties/Gallery';
// import Footer from '../components/footer/Footer';
import Testimonial from '../components/testimonial/Testimonial';


const Home = () => {
    return (  
    <>
      <HeroSection /> 
      <SearchPanel /> 
      <Gallery /> 
      <Testimonial />  
      {/* <Footer />  */}
    </>

    );
}
 
export default Home;