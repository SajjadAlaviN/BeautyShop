import Header from "./components/Header";
import products from "../../data/Products";
import Product from "./components/Product";
import { useContext, useEffect } from "react";
import LoginContex from "../../Ncontexts/LoginContext";
import { useNavigate } from "react-router";

function Products() {
  const navigate = useNavigate();
  const { login } = useContext(LoginContex);
  useEffect(() => {
    if (login == "true") {
      navigate("/", { replace: true });
    }
  }, [login]);
  return (
    <div className="container mx-auto mt-3 bg-background rounded-2xl p-5">
      <Header></Header>
      <div className="grid mt-7 rounded bg-accent grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-2">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
}

export default Products;
