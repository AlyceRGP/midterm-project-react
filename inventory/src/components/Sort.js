import React, { useState } from "react";
import { Col, Form, Row, Table } from "react-bootstrap";

export const Sort = ({ items }) => {
    const [sortBy, setSortBy] = useState('');
    const [order, setOrder] = useState('');

    const handleSortByChange = (e) => {
        setSortBy(e.target.value);
    };

    const handleOrderChange = (e) => {
        setOrder(e.target.value);
    };

    let sortedItems = items;

    if (sortBy && order) {
        sortedItems = items.slice().sort((a, b) => {
            if (sortBy === 'Quantity') {
                if (order === 'Ascending') {
                    return a.quantity - b.quantity;
                } else {
                    return b.quantity - a.quantity;
                }
            } else if (sortBy === 'Price') {
                if (order === 'Ascending') {
                    return a.price - b.price;
                } else {
                    return b.price - a.price;
                }
            }
            return 0;
        });
    }

    if (items.length === 0) {
        return <h3 className="text-center mt-5">No items to display</h3>;
    }

    return (
        <>
            <div className="search">
                <Row>
                    <Col>
                        <Form.Select aria-label="Default select example" 
                        value={sortBy} onChange={handleSortByChange}>
                            <option>Sort by Quantity or Price</option>
                            <option value="Quantity">Quantity</option>
                            <option value="Price">Price</option>
                        </Form.Select>
                    </Col>

                    <Col>
                        <Form.Select aria-label="Default select example" 
                        value={order} onChange={handleOrderChange}>
                            <option>Order</option>
                            <option value="Ascending">Ascending</option>
                            <option value="Descending">Descending</option>
                        </Form.Select>
                    </Col>
                </Row>
            </div>

            <div className="px-5 pb-5">
                <Table striped hover>
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
                        {sortedItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
};