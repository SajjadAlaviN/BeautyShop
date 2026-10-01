import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";
import type { Details, Addtocart } from "../data/Types";

function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Details[]>(getItems() || []);

  function getItems(): Details[] {
    return JSON.parse(localStorage.getItem("Cart") || "[]");
  }

  function AddToCart({ image, price, title, id }: Addtocart) {
    const isExist: boolean = cart.some((item) => item.id == id);
    if (isExist) {
      const editCart: Details | undefined = cart.find((item) => item.id === id);
      if (editCart) {
        editCart.remain += 1;
        editCart.price = price * editCart.remain;
        setCart([...cart]);
      }
    } else {
      const newItem: Details = {
        id: id,
        img: image,
        price: price,
        title: title,
        remain: 1,
      };
      const Carts: Array<Details> = [...cart, newItem];
      setCart(Carts);
    }
  }

  function Remover(id: number) {
    const updatedCarts: Details[] = cart?.filter((item) => {
      return item.id !== id;
    });
    setCart(updatedCarts);
  }

  useEffect(() => {
    if (cart?.length) {
      localStorage.setItem("Cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, AddToCart, Remover }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
