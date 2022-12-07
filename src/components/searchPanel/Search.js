import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './search.css'


const SearchPanel = () => {
    return (
        <div>
            <Form >
                <Form.Group className="mb-3" controlId="formCity">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="City/Locality Name" />
                    <Form.Text className="text-muted">
                        Specify where You want Your next Home.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="text">
                    <Form.Label>Property type</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Type</option>
                        <option value="1">Single room</option>
                        <option value="2">Single room-Self Contained</option>
                        <option value="3">Flat</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="text">
                    <Form.Label>Property Status</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Type</option>
                        <option value="1">Rent</option>
                        <option value="2">Buy</option>
                        <option value="3">Sale</option>
                    </Form.Select>
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="secondary" size="lg" type="search">
                        Search Property
                    </Button>
                </div>
            </Form>
        </div>

    );
}

export default SearchPanel;