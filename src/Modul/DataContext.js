import React from "react";
import { createContext, useState } from "react";
import App from "../App";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [star, setStar] = useState([]);

  return (
    <DataContext.Provider
      value={[product, setProduct, cart, setCart, star, setStar]}
    >
      <App />
    </DataContext.Provider>
  );
};
