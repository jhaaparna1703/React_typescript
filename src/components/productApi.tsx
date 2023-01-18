import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./components.css";


interface IProductType {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
}



const ProductApi = () => {
  const [user, setData] = useState([]);

  

  const alldata = () =>
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((res) => setData(res));

  useEffect(() => {
    alldata();
  }, []);

  return (

    
    <div className="container">
      {user.map((data: IProductType) => (
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }} className="card">
                <Card.Img
                  variant="top"
                  src={data.image}
                  className="products-img"
                />
                <Card.Body>
                  <Card.Title>{data.title.substring(0, 20)}</Card.Title>
                  <Card.Text>{data.description.substring(0, 38)}...</Card.Text>
                  <Card.Text>Price : ${data.price}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      ))}
    </div>
  );
};

export default ProductApi;
