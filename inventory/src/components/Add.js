import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Button, Col, Form } from "react-bootstrap";

export const Add = ({ setItems }) => {

    const [validated, setValidated] = useState(false);

    const [inputIdValue, setInputIdValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [categoryValue, setCategoryValue] = useState('');

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
      
          const item = {
            id: inputIdValue,
            name: nameValue,
            quantity: parseInt(quantityValue, 10),
            price: parseFloat(priceValue),
            category: categoryValue,
          };
      
          setItems((prevItems) => {
            const existingItem = prevItems.find((existingItem) => existingItem.id === item.id);
      
            if (existingItem) {
              alert('Item with the same ID already exists!');
              return prevItems; // Return the original array if the item already exists
            } else {
              alert('Item added!');
              return [...prevItems, item]; // Add the new item to the array
            }
          });
      
          setValidated(true);
        }
      
        setValidated(true);
      };

    return (
        <div className="addSection">
            <h1 className="text-center mb-4">Add an Item</h1>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>ID</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Enter Item ID"
                value={inputIdValue} onChange={(e) => setInputIdValue(e.target.value)}
            />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Name</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Enter Item Name"
                value={nameValue} onChange={(e) => setNameValue(e.target.value)}
            />
            </Form.Group>
        </Row>

        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom05">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" min="1" placeholder="Enter Item Quantity" required
            value={quantityValue} onChange={(e) => setQuantityValue(e.target.value)} />
            <Form.Control.Feedback type="invalid">
            Please provide a valid quantity.
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom05">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" min="1" step="0.01" placeholder="Enter Item Price" required
            value={priceValue} onChange={(e) => setPriceValue(e.target.value)} />
            <Form.Control.Feedback type="invalid">
            Please provide a valid price.
            </Form.Control.Feedback>
            </Form.Group>
        </Row>

        <Row className="categoryDropdown mb-3">
            <Form.Group as={Col} md="10" style={{ marginRight: 35.5 }}>
            <Form.Select aria-label="Default select example" required
            value={categoryValue} onChange={(e) => setCategoryValue(e.target.value)}>
            <option value="">Select a Category</option>
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Entertainment">Entertainment</option>
            </Form.Select>
            </Form.Group>

          <Col>
            <Button variant="success" type="submit">Add</Button>
          </Col>
        </Row>
        </Form>
        </div>
    )
}