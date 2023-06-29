import React from 'react';
import GroceryItem from './GroceryItem';
import './style.css';

export default function App() {
  const items = ['egg', 'banana', 'apple', 'cheery'];
  const cartItems = 0;
  return (
    <div>
      <GroceryItem items={items} cart={cartItems} />
    </div>
  );
}
