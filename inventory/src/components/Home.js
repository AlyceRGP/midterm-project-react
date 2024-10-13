import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

export const Home = ({ items }) => {
    return (
        <>
        <div className="text-center" style={{ paddingTop: 80, paddingBottom: 50 }}>
        <h1>Welcome to the Inventory Management System!</h1>

        <Container>
        <Row style={{ paddingTop: 70, paddingLeft: 80, paddingRight: 80, paddingBottom: 70 }}>
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Add an Item</Card.Title>
                <Card.Text>
                Add an item with its ID, name, quantity, price, and category.
                </Card.Text>
                <Button variant="success" as={Link} to="/add">Add</Button>
            </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Update an Item</Card.Title>
                <Card.Text>
                Search for an item and update its quantity or price.
                </Card.Text>
                <Button variant="success" as={Link} to="/update">Update</Button>
            </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Remove an Item</Card.Title>
                <Card.Text>
                Search for an item and remove it from the inventory.
                </Card.Text>
                <Button variant="success" as={Link} to="/remove">Remove</Button>
            </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>

        <h4 className="text-center">Number of items in inventory: {items.length}</h4>
        </div>
        </>
    )
}