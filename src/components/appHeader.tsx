import React, { useState,useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { FaTruck } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import "./components.css";
import CartModal from "./CartModal";
import data from "../data.json";
import { ShoppingSection } from "./shoppingSection";

export const Header = () => {
   const [search, setSearch] = useState("");
  // data.filter((post) => {
  //   if (search === "") {
  //     return post;
  //   } else if (post.title.toLowerCase().includes(search.toLowerCase())) {
  //     return post;
  //   }
  // });

  return (
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
            onChange={(event) => setSearch(event.target.value)}
          />

          <BiSearchAlt2 className="BiSearchAlt2" />
        </Form>

        <CartModal />
      </Container>
    </Navbar>
  );
};
