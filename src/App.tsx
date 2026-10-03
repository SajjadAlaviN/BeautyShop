import CartProvider from "./Ncontexts/CartProvider";
import LoginProvider from "./Ncontexts/LoginProvider";
import CartContProvider from "./Ncontexts/CartContProvider";
import Routes from "./Routes";
import { RouterProvider } from "react-router";

function App() {
  return (
    <CartContProvider>
      <LoginProvider>
        <CartProvider>
          <RouterProvider router={Routes} />
        </CartProvider>
      </LoginProvider>
    </CartContProvider>
  );
}

export default App;
