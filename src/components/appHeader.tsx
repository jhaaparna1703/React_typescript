import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaTruck } from "react-icons/fa";
import {BiSearchAlt2} from "react-icons/bi"
import "./components.css";

export const Header = () => {
  return (
    <Navbar className="navbar" variant="dark">
      <FaTruck className="FaTruck" />
      <Container>
        <Navbar.Brand className="apnastore" href="#home">
          Apna Store
        </Navbar.Brand>
        <div className="input-group">
          <input
            type="search"
            className="searchbar"
            placeholder="Search for products"
            aria-label="Search"
            aria-describedby="search-addon"

            
          />
          <span className="search_icon">
          <BiSearchAlt2 className="BisearchAlt2"/>
          </span>
          
        </div>
      </Container>
    </Navbar>
  );
};
