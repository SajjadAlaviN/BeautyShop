import { FaRegUserCircle } from "react-icons/fa";

function Header() {
  return (
    <div className="flex flex-col justify-center items-center mt-2.5">
      <FaRegUserCircle className="text-7xl text-text-muted" />
      <p className="text-text">وارد شوید</p>
    </div>
  );
}

export default Header;
