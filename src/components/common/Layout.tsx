import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router";


function Layout() {
  return (
    <div className="bg-surface">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
