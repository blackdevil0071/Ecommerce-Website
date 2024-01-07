
// Cart.js
import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { useCart } from './CartProvider';

const Cart = () => {
  const { items, totalAmount, removeItemFromCart } = useCart();

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((cartItem, index) => (
            <tr key={index}>
              <td>
                <img
                  src={cartItem.imageUrl}
                  className="img-fluid border-0 col-4"
                  alt={cartItem.title}
                />
                <p>{cartItem.title}</p>
              </td>
              <td>${cartItem.price}</td>
              <td className="d-flex align-items-center">{cartItem.quantity}</td>
              <td>
                <Button
                  className="btn btn-danger"
                  onClick={() => removeItemFromCart(cartItem.id)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h3 className="col-md-8 offset-md-4 text-right">Total: ${totalAmount}</h3>
    </>
  );
};

export default Cart;