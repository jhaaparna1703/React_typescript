import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import data from "../data.json";
import { Dispatch } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addToCart, showProducts } from "../store/action";

interface IProductType {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
}

export const ShoppingSection = () => {
  const dispatch: Dispatch<any> = useDispatch();

  // Saving product json data in store
  const showProduct = React.useCallback(
    (products: IProduct[]) => dispatch(showProducts(products)),
    [dispatch]
  );

  // Calling reducer action to save the data in store
  useEffect(() => {
    showProduct(data);
  }, [showProduct]);

  // Reading Products data from store
  const products: readonly IProduct[] = useSelector(
    (state: ProductState) => state.products,
    shallowEqual
  );

  const addCartHandler = (id: number) => {
    console.log(id);
    dispatch(addToCart(id));
  };
  console.log("PRODUCTS FROM REDUX", products);

  const columnsPerRow = 3;

  const getColumnsForRow = () => {
    let items = products.map((post: IProductType) => {
      console.log(post, "post");
      return (
        <Col key={post.id}>
          <Card style={{ width: "18rem" }} className="card">
            <Card.Img variant="top" src={post.image} className="products-img" />
            <Card.Body>
              <Card.Title>{post.title.substring(0, 20)}</Card.Title>
              <Card.Text>{post.description.substring(0, 38)}...</Card.Text>
              <Card.Text>Price : ${post.price}</Card.Text>
              <Button variant="primary" onClick={() => addCartHandler(post.id)}>
                Add to Cart
              </Button>
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
