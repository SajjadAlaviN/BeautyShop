import { createContext } from "react";
interface Item {
  id: number;
  img: string;
  price: number;
  title: string;
  remain: number;
}
const CartContext = createContext<{
  cart: Item[];
  AddToCart: () => void;
  Remover: (id: number) => void;
}>({ cart: [], AddToCart: () => {}, Remover: () => {} });

export default CartContext;
