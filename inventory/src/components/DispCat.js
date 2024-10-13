import React, { useState, useEffect } from "react";
import { Form, Table } from "react-bootstrap";

export const DispCat = ({ items }) => {
    const [categoryValue, setCategoryValue] = useState("");
    const [filteredItemsCat, setFilteredItemsCat] = useState([]);

    useEffect(() => {
        if (categoryValue) {
          const filteredItemsCat = items.filter((item) => item.category === categoryValue);
          setFilteredItemsCat(filteredItemsCat);
        }
        }, [categoryValue, items]);
    
    const handleCategoryChange = (event) => {
        setCategoryValue(event.target.value);
        };

    if (items.length === 0) {
            return <h3 className="text-center mt-5">No items to display</h3>;
    }
    
    return (
        <>
        <div className="search">
            <Form.Select aria-label="Default select example"
            value={categoryValue}
            onChange={handleCategoryChange}>
            <option value="">Select a Category to Display Items</option>
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Entertainment">Entertainment</option>
            </Form.Select>
        </div>

        <div className="px-5 pb-5">
        {categoryValue !== "" ? (
        filteredItemsCat.length > 0 ? (
          <Table striped hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredItemsCat.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                </tr>
                ))}
                </tbody>
              </Table>
            ) : (
              <h3 className="text-center">No items in this category</h3>
            )
          ) : (
            <></>
          )}
        </div>
        </>
    )
}