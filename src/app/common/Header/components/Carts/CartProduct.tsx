"use client"
import { useContext } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import AuthContext from "../../../../../Ncontexts/CartContext";
import type { Details } from "../../../../../data/Types";

function CartProduct(props: Details) {
  const { Remover } = useContext(AuthContext);
  return (
    <div className="flex gap-3 border-b-secondary border-b-2 items-center p-1 text-[12px] justify-between">
      <div className="w-[100px] h-[70px] rounded-lg">
        <img className="w-full h-full rounded-lg" src={props.img} />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[14px]">{props.title}</p>
        <div className="flex justify-between">
          <span>{props.price.toLocaleString("fa-IR")} تومن</span>
          <span>X{props.remain}</span>
        </div>
      </div>
      <button
        className="bg-danger text-text text-[16px] p-1 rounded cursor-pointer active:scale-96"
        onClick={() => {
          Remover(props.id);
        }}
      >
        <RiDeleteBin5Line />
      </button>
    </div>
  );
}

export default CartProduct;
