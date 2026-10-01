"use client"
import { useState } from "react";
import CartContContext from "./CartContContext";

function CartContProvider({ children }: { children: React.ReactNode }) {
  const [cartContainer, setCartContainer] = useState<boolean>(false);
  return (
    <CartContContext.Provider value={{ cartContainer, setCartContainer }}>
      {children}
    </CartContContext.Provider>
  );
}

export default CartContProvider;
