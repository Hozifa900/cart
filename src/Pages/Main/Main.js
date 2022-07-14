import React from "react";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../Modul/DataContext";
import { Container, Row, Col } from "react-bootstrap";
import Viewer from "../Viewer/Viewer";
import Header from "../../Components/Header/Header";
import "./Main.css";

export default function Main() {
  const [product, setProduct, cart, setCart, star, setStar] =
    useContext(DataContext);
  // fetch all the data from http://openewz.com/api
  useEffect(() => {
    fetch("http://openewz.com/api.php")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="main">
        {product.map((item, index) => (
          <Viewer
            name={item.name}
            src={item.img}
            key={index}
            star={item.star}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}
