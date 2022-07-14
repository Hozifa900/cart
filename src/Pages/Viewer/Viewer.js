import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./Viewer.css";
import { DataContext } from "../../Modul/DataContext";
import { useContext } from "react";

export default function Viewer(props) {
  const [product, setProduct, cart, setCart, star, setStar] =
    useContext(DataContext);

  // Add new item to cart
  const AddToCart = (id, item) => {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === id);
    if (index === -1) {
      newCart.push({ id, item: item, count: 1 });
    } else {
      newCart[index].count++;
    }
    setCart(newCart);
    alert("Added to cart");
  };

  // Add/Delete item to/from star
  const AddToStar = (id, item) => {
    const newStar = [...star];
    let newProduct = [...product];
    const productIndex = newProduct.findIndex((item) => item.id === id);
    const index = newStar.findIndex((item) => item.id === id);
    if (index === -1) {
      newStar.push({ id, item: item, count: 1 });
      setStar(newStar);
      newProduct[productIndex].star = "stared.png";
      setProduct(newProduct);
    } else {
      newProduct[productIndex].star = "star.png";
      setProduct(newProduct);
      const index = newStar.findIndex((item) => item.id === id);
      newStar.splice(index, 1);
      setStar(newStar);
    }
  };

  return (
    <Card style={{ width: "20%", margin: "5px" }}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        {/* <Card.Text>{props.body}</Card.Text> */}
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <img
            src={props.star}
            className="icon"
            onClick={() => AddToStar(props.id, props.name)}
          />
          <img
            src="./cart.png"
            className="icon"
            onClick={() => AddToCart(props.id, props.name)}
          />
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
