"use client";
import React, { useState, useReducer, useEffect } from "react";
import LoginContex from "../Ncontexts/LoginContext";

interface Action {
  type: string;
  value: string;
}

interface Fields {
  userName: string;
  password: string;
}

function LoginProvider({ children }: { children: React.ReactNode }) {
  const [login, setLogin] = useState<boolean>(true);
  const [fields, dispatch] = useReducer(fieldreducer, {
    userName: "",
    password: "",
  });

  function fieldreducer(fields: Fields, action: Action): Fields {
    switch (action.type) {
      case "userName":
        return {
          ...fields,
          userName: action.value,
        };

      case "password":
        return {
          ...fields,
          password: action.value,
        };

      default:
        return fields;
    }
  }

  useEffect(() => {
    setLogin(JSON.parse(localStorage.getItem("login") || "true"));
  }, []);

  console.log(login);

  return (
    <LoginContex.Provider value={{ login, setLogin, fields, dispatch }}>
      {children}
    </LoginContex.Provider>
  );
}

export default LoginProvider;
