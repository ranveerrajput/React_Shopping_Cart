import React from "react";
import { CartState } from "../context/CartConText.jsx";
import SingleProduct from "./SingleProduct";
import "./styles.css";
import Filter from "./Filter.jsx";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log("state", products);
  return (
    <div className="home">
        <Filter/>
      <div className="productContainer">
        {products.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
