import React from "react";


import './contactSection.css'

const ContactSection = () => {
    return ( 
        <>
           <div className="contact-section">
            <div>
                <h5>Address:</h5>
                    <p className="contact-par">
                    Aseda House, 2nd Floor, Adum-Kumasi
                    <br/>
                    Bantama Market, Kumasi
                </p>
            </div>
                <div>
                    <h5>Phone:</h5>
                    <p className="contact-par">
                        +233 558 346 020
                        <br />
                        +233 501 595 663 
                    </p>
                </div>
                <div>
                    <h5>Email:</h5>
                    <p className="contact-par">
                        ngyamfi81@gmail.com
                        <br />
                        mydensuniqueventures@gmail.com
                    </p>
                </div>
            </div> 
        </>
     );
}
 
export default ContactSection;