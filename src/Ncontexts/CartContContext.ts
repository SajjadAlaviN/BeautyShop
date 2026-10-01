import { createContext, type Dispatch } from "react";

const CartContContext = createContext<{
  cartContainer: boolean;
  setCartContainer: Dispatch<boolean>;
}>({ cartContainer: false,  setCartContainer:()=>{}});

export default CartContContext;
