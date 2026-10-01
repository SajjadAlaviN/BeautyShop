import Header from "./components/Header";
import Fields from "./components/Fields";
import { useContext, useEffect } from "react";
import LoginContex from "../../contexts/LoginContext";
import { useNavigate } from "react-router";
function Login() {
  const { login } = useContext(LoginContex);
  const navigate = useNavigate();
  useEffect(() => {
    if (login == "false") {
      navigate("/home", { replace: true });
    }
  }, [login]);
  return (
    <div className="container p-5 bg-background my-7 w-1/2 mx-auto rounded-lg">
      <Header />
      <Fields />
    </div>
  );
}

export default Login;
