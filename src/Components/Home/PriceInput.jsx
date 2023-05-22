// PriceInput.js
import React, { useState } from "react";

function PriceInput({ onPriceChange }) {
  const [price, setPrice] = useState(5000);

  const handlePriceChange = (e) => {
    const newPrice = parseInt(e.target.value);
    setPrice(newPrice);
    onPriceChange(newPrice);
  };

  return (
    <div className="priceInput">
      <div className="label_total flex">
        <label htmlFor="price">Your Budget &nbsp;</label>
        <h3 className="total">${price}</h3>
      </div>
      <div className="input flex">
        <input
          type="range"
          max="5000"
          min="1000"
          value={price}
          onChange={handlePriceChange}
        />
      </div>
    </div>
  );
}

export default PriceInput;
