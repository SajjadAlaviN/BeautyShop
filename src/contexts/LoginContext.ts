import { createContext, type Dispatch } from "react";

const LoginContex = createContext<{
  login: boolean;
  setLogin: Dispatch<boolean>;
}>({ login: true, setLogin: () => {} });

export default LoginContex;
