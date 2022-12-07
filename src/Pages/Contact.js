import React from 'react';
import ContactSection from '../components/contactSection/ContactSection';
import FormSection from '../components/contactSection/FormSection';
import ContactBanner from '../components/contactSection/ContactBanner';

const Contact = () => {
    return (  
        <>
        <ContactBanner />
        <ContactSection />
        <FormSection />
        </>
    );
}
 
export default Contact;