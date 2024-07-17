import React, { useState } from 'react';

const ItemQuantitySelector = ({ min = 1, max = 10 }) => {
  const [quantity, setQuantity] = useState(min);

  const handleIncrement = () => {
    if (quantity < max) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > min) {
      setQuantity(quantity - 1);
    }
  };

  const handleChange = (event) => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    setQuantity(value);
  };

  return (
    <div className="quantity-selector text-white rounded-md">
      <button onClick={handleDecrement} disabled={quantity <= min}>-</button>
      <input className='text-black'
        type="number"
        value={quantity}
        onChange={handleChange}
        min={min}
        max={max}
      />
      <button onClick={handleIncrement} disabled={quantity >= max}>+</button>
    </div>
  );
};

export default ItemQuantitySelector;
