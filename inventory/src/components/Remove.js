import React, { useState } from "react";
import { Button, Col, Form, Row } from 'react-bootstrap';

export const Remove = ({ items, setItems }) => {

    const [validated, setValidated] = useState(false);
    const [searchId, setSearchId] = useState('');

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            const itemId = searchId;
            const foundItem = items.find((item) => item.id === itemId);

            if (!foundItem) {
                alert('Item not found!');
            } else {
                alert(`${foundItem.name} has been removed from the inventory!`);
                removeItem(itemId);
            }
        }

        setValidated(true);
    };

    const removeItem = (id) => {
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
    };

    return (
        <>
        <div className="addSection">
            <h1 className="text-center mb-4">Remove an Item</h1>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="align-items-center">
                <Form.Group as={Col} md="10" controlId="validationCustom01">
                <Form.Control
                    required
                    type="text"
                    placeholder="Enter Item ID"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                />
                </Form.Group>

                <Col xs="auto" className="my-1">
                <Button type="submit" variant="success">Remove</Button>
                </Col>
                </Row>
            </Form>
        </div>
        </>
    )
}