import React, { useState, useReducer } from "react";
import LoginContex from "./LoginContext";

interface Action {
  type: string;
  value: string;
}

function getItem(): boolean {
  return localStorage.getItem("login") === "true";
}
function LoginProvider({ children }: { children: React.ReactNode }) {
  const [fields, dispatch] = useReducer(fieldreducer, {
    userName: "",
    password: "",
    visible: false,
  });

  function fieldreducer(fields: object, action: Action) {
    switch (action.type) {
      case "userName": {
        return {
          ...fields,
          userName: action.value,
        };
      }
      case "password": {
        return {
          ...fields,
          password: action.value,
        };
      }
      case "visible": {
        return {
          ...fields,
          vissible: action.value,
        };
      }
    }
  }

  const [login, setLogin] = useState<boolean>(getItem());

  return (
    <LoginContex value={{ login, setLogin, fields, dispatch }}>
      {children}
    </LoginContex>
  );
}

export default LoginProvider;
