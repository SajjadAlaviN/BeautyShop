import { useContext, useEffect, useState } from "react";
import LoginContex from "../../../contexts/LoginContext";
import { useNavigate } from "react-router";
import value from "../../../data/constanse";
const { USER_NAME, PASSWORD } = value;
function Fields() {
  const { login, setLogin } = useContext(LoginContex);
  const navigate = useNavigate();
  const { fields, dispatch } = useContext(LoginContex);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    if (!login) {
      navigate("/home", { replace: true });
    } else {
      navigate("/");
    }
  }, [login]);

  return (
    <div className="mt-4">
      <div className="flex flex-col gap-[10px] items-center">
        <div className=" lg:w-1/2 sm:w-4/5">
          <input
            value={fields.userName}
            onChange={(e) => {
              dispatch({ type: "userName", value: e.target.value });
            }}
            className="bg-background text-text rounded text-sm border-border border-2 py-1 px-2 w-full"
            type="text"
            placeholder="نام کاربری را وارد کنید"
            required
          />
          {!fields.userName ? (
            <p className="text-danger text-[12px]">لطفا این فیلد را پر کنید </p>
          ) : null}
        </div>
        <div className="lg:w-1/2 sm:w-4/5">
          <input
            value={fields.password}
            onChange={(e) => {
              dispatch({ type: "password", value: e.target.value });
            }}
            className="bg-background w-full text-text rounded text-sm border-border border-2 py-1 px-2 "
            type={showPass ? "text" : "password"}
            placeholder="پسوورد را وارد کنید"
            required
          />
          {!fields.password ? (
            <p className="text-danger text-[12px]">لطفا این فیلد را پر کنید </p>
          ) : null}
        </div>

        <div className="flex gap-1">
          <input
            value={fields.visible}
            onChange={(e) => {
              dispatch({ type: "vissible", value: e.target.value });
              setShowPass(!showPass);
            }}
            type="checkbox"
            id="visible"
          />
          <label htmlFor="visible" className="text-text-muted">
            نمایش پسوورد
          </label>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <button
          className="bg-success py-[10px] px-[15px] w-[50%] my-4 rounded text-background active:scale-97 cursor-pointer"
          onClick={() => {
            if (USER_NAME === fields.userName && PASSWORD == fields.password) {
              setLogin("false");
              localStorage.setItem("login", JSON.stringify(false));
            } else if (!fields.userName || !fields.password) {
              alert("پر کردن فیلد ها اجباری است");
            } else {
              alert("نام کاربری یا رمز عبور اشتباه است");
            }
          }}
        >
          ورود
        </button>
      </div>
    </div>
  );
}

export default Fields;
