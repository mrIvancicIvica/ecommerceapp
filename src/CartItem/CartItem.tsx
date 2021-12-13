import { WorkshopTypes } from "../context/CartContext";
import { Stack, Button } from "@mui/material";

type Props = {
  item: WorkshopTypes;
  addToCart: (clickedItem: WorkshopTypes) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <div>
    <img src={item.imageUrl} alt={item.title} />
    <h1>{item.title}</h1>
    <p> {item.price} </p>
    <p>{(item.amount * item.price).toFixed(2)}</p>
    <Stack spacing={2} direction="row">
      <Button onClick={() => removeFromCart(item.id)} variant="contained">
        -
      </Button>
      <p>{item.amount}</p>
      <Button onClick={() => addToCart(item)} variant="contained">
        +
      </Button>
    </Stack>
  </div>
);

export default CartItem;
