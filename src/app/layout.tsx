"use client";
import LoginProvider from "../contexts/LoginProvider";
import CartContProvider from "../Ncontexts/CartContProvider";
import CartProvider from "../Ncontexts/CartProvider";
import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";
import "../../public/css/index.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fa IR" dir="rtl" className="font-vazirmatn">
      <body className="min-h-full flex flex-col">
        <Header />
        <CartProvider>
          <CartContProvider>
            <LoginProvider>{children}</LoginProvider>
          </CartContProvider>
        </CartProvider>
        <Footer></Footer>
      </body>
    </html>
  );
}
