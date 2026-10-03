import { useContext } from "react";
import CartProduct from "../Carts/CartProduct";
import CartContext from "../../../../../Ncontexts/CartContext";
import clsx from "clsx";
import CartContContext from "../../../../../Ncontexts/CartContContext";

function Cart() {
  const { cartContainer ,setCartContainer} = useContext(CartContContext)
  const { cart } = useContext(CartContext);
  const total: number = cart.reduce((prev: number, current:{price : number}) => {
    return prev + current.price;
  }, 0);

  return (
    <>
    <div className="absolute top-0 left-0 w-screen h-screen" onClick={
      ()=>{
        setCartContainer(!cartContainer)
      }
    }>

    </div>
      <div className="items-center bg-accent absolute top-[65px] left-[100px] rounded p-3 w-2/7">
        <div className="flex justify-between items-center gap-2 border-b-border border-b-2">
          <h1 className="text-text text-xl">سبد خرید: </h1>
        </div>
        <div>
          {cart.map((item) => {
            return <CartProduct key={item.id} {...item} />;
          })}
          {cart.length == 0 ? (
            <div className="my-3 flex justify-center">
              <h1>سبد خرید شما خالی است</h1>
            </div>
          ) : null}
        </div>
        <div className="flex justify-between my-2">
          <span>مجموع کل : </span>
          <span>{total.toLocaleString("fa-IR")}</span>
        </div>
        <div>
          <button
            className={clsx(
              "bg-success rounded py-2 px-2 w-full cursor-pointer active:scale-97",
              cart.length == 0 ? " pointer-events-none bg-gray-300!" : null,
            )}
          >
            تکمیل خرید
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
