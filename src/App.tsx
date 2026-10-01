import CartProvider from "./contexts/CartProvider";
import LoginProvider from "./contexts/LoginProvider";
import CartContProvider from "./contexts/CartContProvider";
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
