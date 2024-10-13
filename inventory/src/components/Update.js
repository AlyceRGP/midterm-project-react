import React, { useState } from "react";
import { Button, Col, Form, Row } from 'react-bootstrap';

export const Update = ({ items, setItems }) => {

    const [validated, setValidated] = useState(false);
    const [searchId, setSearchId] = useState('');

    const [updateSelectValue, setUpdateSelectValue] = useState('');
    const [newNumberValue, setNewNumberValue] = useState('');

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
                const updateType = updateSelectValue; 
                const newValue = newNumberValue;

                if (updateType === 'Quantity') {
                    const updatedItem = { ...foundItem, quantity: newValue };
                    const updatedItems = items.map((item) => item.id === itemId ? updatedItem : item);
                    setItems(updatedItems);
                    alert(`The quantity of Item ${foundItem.name} is updated from ${foundItem.quantity} to ${newValue}.`);
                } else if (updateType === 'Price') {
                    const updatedItem = { ...foundItem, price: newValue };
                    const updatedItems = items.map((item) => item.id === itemId ? updatedItem : item);
                    setItems(updatedItems);
                    alert(`The price of Item ${foundItem.name} is updated from ${foundItem.price} to ${newValue}.`);
                }
            }
        }

        setValidated(true);
    };

    return (
        <>
        <div className="addSection">
            <h1 className="text-center mb-4">Update an Item</h1>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="align-items-center mb-3">
                <Col>
                    <Form.Group controlId="validationCustom01">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter Item ID"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                    />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Select aria-label="Default select example" required
                    value={updateSelectValue} onChange={(e) => setUpdateSelectValue(e.target.value)}>
                        <option value="">Update Quantity or Price</option>
                        <option value="Quantity">Quantity</option>
                        <option value="Price">Price</option>
                    </Form.Select>
                </Col>
                </Row>

                <Row>
                    <Form.Group as={Col} md="10" controlId="validationCustom05" style={{ marginRight: 9 }}>
                    <Form.Control type="number" min="1" placeholder="Enter New Value" required
                    value={newNumberValue} onChange={(e) => setNewNumberValue(e.target.value)}
                    step={updateSelectValue === 'Quantity' ? 1 : 0.01} />
                    <Form.Control.Feedback type="invalid">
                    Please provide a valid number.
                    </Form.Control.Feedback>
                    </Form.Group>

                <Col>
                    <Button type="submit" variant="success">Update</Button>
                </Col>
                </Row>
            </Form>
        </div>
        </>
    )
}