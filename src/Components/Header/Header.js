import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Modal,
} from "react-bootstrap";
import { useState, useContext } from "react";
import { DataContext } from "../../Modul/DataContext";

function NavScrollExample() {
  const [product, setProduct, cart, setCart, star, setStar] =
    useContext(DataContext);
  const [show, setShow] = useState(false);
  const [iscart, setIscart] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Show cart layout
  const ShowCart = async () => {
    await setIscart(true);
    handleShow();
  };

  //Show Star layout
  const ShowStar = async () => {
    await setIscart(false);
    handleShow();
  };

  // clear cart
  const ClearCart = () => {
    if (iscart) setCart([]);
    else {
      setStar([]);
      let newProduct = [...product];
      for (var i = 0; i < newProduct.length; i++) {
        newProduct[i].star = "star.png";
      }
      setProduct(newProduct);
    }
  };

  //Delete item from cart
  const DeleteItem = (id) => {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === id);
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Products and Services</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" onClick={ShowCart}>
                Cart
              </Nav.Link>
              <Nav.Link href="#action2" onClick={ShowStar}>
                Stared
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {iscart
            ? cart.map((item, index) => (
                <li key={index}>
                  {item.item}
                  <Button
                    variant="outline-info"
                    size="sm"
                    onClick={() => DeleteItem(item.id)}
                    style={{ margin: "10px" }}
                  >
                    Delete
                  </Button>
                </li>
              ))
            : star.map((item, index) => <li key={index}>{item.item}</li>)}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={ClearCart}>
            Clear
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavScrollExample;
