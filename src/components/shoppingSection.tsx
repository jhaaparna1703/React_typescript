import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import data from "../data.json";

export const ShoppingSection = () => {
  interface IProductType {
    id: number;
    image: string;
    title: string;
    price: number;
    description: string;
  }

  const columnsPerRow = 3;

  const getColumnsForRow = () => {
    let items = data.map((post: IProductType) => {
      console.log(post, "post");
      return (
        <Col key={post.id}>
          <Card style={{ width: "18rem" }} className="card">
            <Card.Img variant="top" src={post.image} className="products-img" />
            <Card.Body>
              <Card.Title>{post.title.substring(0, 20)}</Card.Title>
              <Card.Text>{post.description.substring(0, 38)}...</Card.Text>
              <Card.Text>Price : ${post.price}</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });
    return items;
  };

  useEffect(() => {
    getColumnsForRow();
  });

  return (
    <Container>
      <Row xs={1} md={columnsPerRow}>
        {getColumnsForRow()}
      </Row>
    </Container>
  );
};
