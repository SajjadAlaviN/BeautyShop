import { createContext, type Dispatch } from "react";

interface Fields {
  userName: string;
  password: string;
}

type Action =
  | {
      type: "userName";
      value: string;
    }
  | {
      type: "password";
      value: string;
    }
  | {
      type: "visible";
      value: boolean;
    };

interface LoginContextType {
  login: boolean;
  setLogin: Dispatch<boolean>;
  fields: Fields;
  dispatch: Dispatch<Action>;
}

const LoginContex = createContext<LoginContextType>({
  login: true,
  setLogin: () => {},
  fields: {
    userName: "user",
    password: "1234",
  },
  dispatch: () => {},
});

export default LoginContex;
