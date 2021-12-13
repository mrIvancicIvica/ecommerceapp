import { useState, createContext } from "react";

export type WorkshopTypes = {
  id: number;
  title: string;
  desc: string;
  price: number;
  date: string;
  category: string;
  userId: number;
  imageUrl: string;
  amount: number;
  cartOpen: boolean;
};

type CartContextType = {
  cartOpen: boolean;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: any;
  setCartItems: React.Dispatch<React.SetStateAction<WorkshopTypes[]>>;
  handleAddToCart: any;
  handleRemoveFromCart: any;
  getTotalItems: any
};

export const CartContext = createContext<CartContextType | null>(null);

type CartTypeProps = {
  children: React.ReactNode;
};

const CartContetxtProvider = ({ children }: CartTypeProps) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as WorkshopTypes[]);

  const getTotalItems = (items: WorkshopTypes[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: WorkshopTypes) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as WorkshopTypes[])
    );
  };

  const cartContetxValue = {
    cartOpen,
    setCartOpen,
    cartItems,
    setCartItems,
    handleAddToCart,
    handleRemoveFromCart,
    getTotalItems
  };

  return (
    <CartContext.Provider value={cartContetxValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContetxtProvider;
