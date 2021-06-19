import React from 'react'
import { NavLink } from 'react-router-dom';
import { Dropdown } from "semantic-ui-react";
import { useSelector } from 'react-redux';

export default function CartSummary() {
 
  const { cartItems } = useSelector(state => state.cart)

  return (
    <div>
      <Dropdown item text="Your Cart">
        <Dropdown.Menu>
          {
            cartItems.map((cartItem) => (
              <Dropdown.Item>
                {cartItem.product.productName}
                <Label>
                  {cartItem.quantity}
                </Label>
              </Dropdown.Item>
            ))
          }
          <Dropdown.Divider />
          <Dropdown.Item as={NavLink} to="/cart">Sepete git</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}