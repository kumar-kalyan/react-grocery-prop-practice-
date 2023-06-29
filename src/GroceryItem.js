import React from 'react';
function GroceryItem(props) {
  let cart = props.cart;
  function incrementCart() {
    cart++;
    alert('items in the cart: '+ cart);
  }
  const items = props.items;
  const gorceryItems = items.map((item) => (
    <button style={{ margin: 10 }} onClick={incrementCart}>
      {item}
    </button>
  ));

  return <div>{gorceryItems} </div>;
}
export default GroceryItem;
