// components/OrderForm.js

import React, { useState } from 'react';

const OrderForm = ({ onOrder }) => {
  const [foodId, setFoodId] = useState('');
  const [addressId, setAddressId] = useState('');
  const [paymentMode, setPaymentMode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onOrder({ foodId, addressId, paymentMode });
    // Clear form
    setFoodId('');
    setAddressId('');
    setPaymentMode('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Food ID:</label>
        <input type="text" value={foodId} onChange={(e) => setFoodId(e.target.value)} />
      </div>
      <div>
        <label>Address ID:</label>
        <input type="text" value={addressId} onChange={(e) => setAddressId(e.target.value)} />
      </div>
      <div>
        <label>Payment Mode:</label>
        <select value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)}>
          <option value="cash">Cash</option>
          <option value="card">Card</option>
          <option value="UPI">UPI</option>
        </select>
      </div>
      <button type="submit">Place Order</button>
    </form>
  );
}

export default OrderForm;
