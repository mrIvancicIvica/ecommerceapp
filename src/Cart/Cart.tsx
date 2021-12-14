import { useContext } from "react";
import { Button, Link } from "@mui/material";
import { FC } from "react";
import CartItem from "../CartItem/CartItem";
import { WorkshopTypes } from "../context/CartContext";
import { CartContext } from "../context/CartContext";
import {Link as RouterLink } from "react-router-dom"

type Props = {
  cartItems: WorkshopTypes[];
  addToCart: (clickedItem: WorkshopTypes) => void;
  removeFromCart: (id: number) => void;
};

const Cart: FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const cartContext = useContext(CartContext);
  const calculateTotal = (items: WorkshopTypes[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <div style={{ marginBottom: "60px" }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Card s empty!</p>
      ) : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
      {cartContext?.cartItems.length === 0 ? (
        <Button disabled={true}>Proceed</Button>
      ) : (
        
        <Button>
          <Link
            component={RouterLink}
            to={`/login`}
            style={{ textDecoration: "none" }}
          >
            Proceed
          </Link>
        </Button>
      )}
    </div>
  );
};

export default Cart;
