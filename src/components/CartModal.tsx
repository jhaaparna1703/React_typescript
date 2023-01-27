import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaCartPlus } from "react-icons/fa";
import "./components.css";

const CartModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="cart-quantity">1</div>
      <FaCartPlus onClick={handleShow} className="FaCartPlus" />
      

      <Modal show={show} onHide={handleClose} className="Modal-cart">
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Go to Cart
          </Button>
         
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartModal;
