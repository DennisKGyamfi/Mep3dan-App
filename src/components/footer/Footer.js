import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      
      <div className="footerDivs">
        <div className="subFooterDiv">
          <h3>MepɛDan</h3>
          <p>An Easy way to Find a New Home!</p>
            {/* <div className="socials" >
            <FontAwesomeIcon icon="fa-brands fa-twitter" /> 
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </div>   */}
        </div>

        <div className="subFooterDiv">
          <h3>About Us</h3>
          <ul className="aboutUl">
            <a href="#"> Our Story </a>
            <a href="#"> Meet the team </a>
            <a href="#"> Careers </a>
            <a href="#"> FAQs </a>
          </ul>
          
        </div>
        <div className="subFooterDiv">
                  <h3>Have a Question?</h3>
                  <ul className="QuestionUl">
                    <li href="#aboutUS"> Aseda House,2nd Floor,Adum-Kumasi</li>
                    <li href="#"> +233 558 346 020 </li>
                    <li href="#"> mydensuniqueventures@gmail.com </li>
                  </ul>
        </div>
      </div >
      <div className='copyrightDiv'>
           &copy; Created by Dennis Kwame Gyamfi 
      </div>     
    </div>
  );
};

export default Footer;
