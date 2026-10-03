"use client"
import { useContext } from "react";
import { FaRegStar } from "react-icons/fa";
import AuthContext from "../../../Ncontexts/CartContext";
import clsx from "clsx";
import CartContContext from "../../../Ncontexts/CartContContext";

function Product(props) {
  const { AddToCart } = useContext(AuthContext);
  const { setCartContainer } = useContext(CartContContext);
  return (
    <div className="flex flex-col gap-3 border-2 border-accent items-center justify-between rounded-xl p-2 bg-secondary">
      <div className="w-full rounded ">
        <img src={props.image} className="w-full rounded-xl" />
      </div>
      <div>
        <span className="text-text">{props.title}</span>
        <p className="text-text-muted">{props.description}</p>
      </div>
      <div className="flex justify-between w-full p-2">
        <div className="flex">
          <span className="text-accent">
            {props.price.toLocaleString("fa-IR")}
          </span>
          <span className="text-primary">تومان</span>
        </div>
        <div className="flex text-yellow-500">
          {Math.round(props.rating)}
          <FaRegStar />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button
          className={clsx(
            "bg-accent w-3/4 text-white p-1 rounded cursor-pointer active:scale-98",
            !props.stock ? "bg-gray-500! pointer-events-none!" : null,
          )}
          onClick={() => {
            AddToCart({
              image: props.image,
              title: props.title,
              price: props.price,
              id: props.id,
            });
            setCartContainer(true);
          }}
        >
          {props.stock ? "افزودن به سبد خرید" : "ناموجود"}
        </button>
      </div>
    </div>
  );
}

export default Product;
