import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from "react-bootstrap";

export const DispAll = ({ items }) => {

    if (items.length === 0) {
        return <h3 className="text-center mt-5">No items to display</h3>;
    }

    return (
        <>
        <div className="displayAll">
            <h1 className="text-center">All Items</h1></div>
            
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
                {items.map((item) => (
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
    )
}