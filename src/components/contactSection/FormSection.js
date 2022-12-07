import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MainMap from "./MainMap";

import './contactSection.css'


const FormSection = () => {
    return (  
        <>
        <div className="formSection">
                <Form className="form">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="Your Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Subject" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" placeholder="Message" rows={3}  />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Send Message
                    </Button>

                </Form>
                <div className="mapdiv">
                    <MainMap />
                </div>
        </div>
        </>
    );
}
 
export default FormSection;