import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaTruck,FaCartPlus } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import "./components.css";

export const Header = () => {
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
          />
          
            <BiSearchAlt2 className="BiSearchAlt2"/>
          
        </Form>
        <FaCartPlus className="FaCartPlus"/>
      </Container>
    </Navbar>
  );
};
