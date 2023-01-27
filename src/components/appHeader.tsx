import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { FaTruck } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import "./components.css";
import CartModal from "./CartModal";
import data from "../data.json";

export const Header = () => {
  const searchProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.currentTarget.value;
    console.log(searchTerm);

    let searchedData = data.find(
      (o) => o.title.toLowerCase() === searchTerm.toLowerCase()
    );
    console.log(searchedData);
  };

  return (
    <div>
      <Navbar className="navbar" expand="lg">
        <Container fluid>
          <FaTruck className="FaTruck" />
          <Navbar.Brand className="apnastore">Apna Store</Navbar.Brand>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for products"
              className="searchbox"
              aria-label="Search"
              onChange={searchProduct}
            />

            <BiSearchAlt2 className="BiSearchAlt2" />
          </Form>

          <CartModal />
        </Container>
      </Navbar>
    </div>
  );
};
