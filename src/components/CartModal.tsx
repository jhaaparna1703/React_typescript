import React, { Dispatch, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaCartPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  addQuantity,
  removeFromCart,
  subtractQuantity,
  totalAmount,
} from "../store/action";
import { RootState } from "../store/combineReducer";
import "./components.css";

const CartModal = () => {
  const [show, setShow] = useState(false);
  // const [totalCartAmount, setTotalCartAmount] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch: Dispatch<any> = useDispatch();

  const products = useSelector((state: RootState) => state.cartProducts);
  const totalCartAmount = useSelector((state: RootState) => state.cartProducts.totalAmount);
  const totalAmount = totalCartAmount.toFixed(2)

  // console.log("this belongs to the cart", products);

  const handleDelete = (id: number) => {
    // console.log(id, "hellllloooo");
    dispatch(removeFromCart(id));
  };

  const handleDecreament = (id: number) => {
    // console.log("quantity km hua");
    dispatch(subtractQuantity(id));
  };

  const handleIncreament = (id: number) => {
    // console.log(id, "hellllloooo");
    dispatch(addQuantity(id));
  };

  return (
    <div>
      <div className="cart-quantity">{products.cartProducts.length}</div>

      <FaCartPlus onClick={handleShow} className="FaCartPlus" />

      <Modal show={show} onHide={handleClose} className="Modal-cart">
        <Modal.Header closeButton>
          <Modal.Title>Cart Total : $ {totalAmount}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table>
            <thead>
              <tr>
                <th className="product-title ">Product Title</th>
                <th className="product-amount ">Amount</th>
                <th className="cartProduct-quantity">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.cartProducts.length &&
                products.cartProducts.map((cart) => (
                  <tr key={cart.id}>
                    <td className="product-title ">{cart.title}</td>
                    <td className="product-amount ">
                      ${cart.price * cart.quantity}
                    </td>
                    <td className="cartPrduct-quantity">
                      <CiSquarePlus
                        id="increament-decreament"
                        onClick={() => {
                          handleIncreament(cart.id);
                        }}
                      />
                      {cart.quantity}
                      <CiSquareMinus
                        id="increament-decreament"
                        onClick={() => handleDecreament(cart.id)}
                      />
                    </td>
                    <td>
                      <button
                        className="remove-button"
                        onClick={() => handleDelete(cart.id)}
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CartModal;
