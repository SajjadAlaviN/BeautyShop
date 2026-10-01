import { Link, useNavigate } from "react-router";
import { IoLogOutOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import Cart from "./components/Carts/Cart";
import { useContext} from "react";
import LoginContex from "../../../contexts/LoginContext";
import CartContContext from "../../../contexts/CartContContext";

function Header() {
  const { cartContainer, setCartContainer } = useContext(CartContContext);
  const { login, setLogin } = useContext(LoginContex);
  const navigate = useNavigate();

  function logOutHandler() {
    navigate("/", { replace: true });
    localStorage.setItem("login", JSON.stringify(true));
    setLogin(true);
  }

  function toggleCart() {
    setCartContainer(!cartContainer);
  }
  return (
    <div className="container w-screen flex sticky top-0 justify-center mx-auto">
      <div className=" lg:max-w-[90%] container flex justify-between w-full items-center relative bg-background rounded-2xl p-4">
        <div className="flex gap-2">
          <Link to="/" className="text-primary text-xl">
            Beauty Shop
          </Link>
          <span className="text-accent">حس لوکس و طبیعی </span>
        </div>
        {login == "false" ? (
          <div className="flex gap-2 justify-between ">
            <button
              onClick={toggleCart}
              className="bg-primary flex gap-1 items-center text-background py-[5px] px-2.5 rounded active:scale-97 cursor-pointer"
            >
              <TiShoppingCart className="text-lg font-bold" />
            </button>

            <button
              className="bg-danger flex gap-1 items-center text-background py-[5px] px-2.5 rounded active:scale-97 cursor-pointer"
              onClick={logOutHandler}
            >
              <IoLogOutOutline className="text-lg font-bold" />
              خروج
            </button>
          </div>
        ) : null}
        {cartContainer ? <Cart /> : null}
      </div>
    </div>
  );
}

export default Header;
