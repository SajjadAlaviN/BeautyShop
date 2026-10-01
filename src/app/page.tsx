"use client";

import Header from "./components/Header";
import Fields from "./components/Fields";
import { useContext, useEffect } from "react";
import LoginContex from "../Ncontexts/LoginContext";
import { useRouter } from "next/navigation";

function Login() {
  const { login } = useContext(LoginContex);
  const router = useRouter();
  useEffect(() => {
    if (login == false) {
      router.replace("/home");
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
