import React from 'react'
import { NavLink } from 'react-router-dom';
import { Dropdown } from "semantic-ui-react";
import { useSelector } from 'react-redux';

export default function CartSummary() {

  const { cartItems } = useSelector(state => state.cart) //State'teki cartItemsı çekiyoruz

  return (
    <div>
      <Dropdown item text="Your Cart">
        <Dropdown.Menu>
          {
            cartItems.map((cartItem) => (
              <Dropdown.Item key={cartItem.product.id}>
                {cartItem.product.productName}
                <Label>{cartItem.quantity}</Label>
              </Dropdown.Item>
            ))
          }
          <Dropdown.Divider />
          <Dropdown.Item as={NavLink} to="/cart">Go to Cart</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
//Sepete gitme işlemini react router dom elementi ile yapıyoruz!!