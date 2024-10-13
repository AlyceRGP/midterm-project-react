import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Row, Button, Col, Form } from "react-bootstrap";

export const Search = ({ items }) => {
  const [validated, setValidated] = useState(false);

  const [searchId, setSearchId] = useState('');
  const [foundItem, setFoundItem] = useState(null);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
        event.preventDefault();
        const itemId = searchId;
        const foundItem = items.find((item) => item.id === itemId);
        setFoundItem(foundItem);

        if (!foundItem) {
            alert('Item not found!');
        }
    }

    setValidated(true);
  };

  return (
    <>
    <div className="search">
        <h1 className="text-center mb-4">Search for an Item</h1>

    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="align-items-center">
            <Form.Group as={Col} md="10" controlId="validationCustom01">
            <Form.Control
                required
                type="text"
                placeholder="Enter Item ID"
                value={searchId}
                onChange={(event) => setSearchId(event.target.value)}
            />
            </Form.Group>

            <Col xs="auto" className="my-1">
            <Button type="submit" variant="success">Search</Button>
            </Col>
        </Row>
        </Form>
        </div>

        <div className="px-5">
        {foundItem && (
        <Table striped>
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Category</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{foundItem.id}</td>
                <td>{foundItem.name}</td>
                <td>{foundItem.quantity}</td>
                <td>{foundItem.price}</td>
                <td>{foundItem.category}</td>
                </tr>
            </tbody>
            </Table>
        )}
    </div>
    </>
    )
}