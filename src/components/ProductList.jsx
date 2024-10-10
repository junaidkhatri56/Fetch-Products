import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Spinner, Alert } from "react-bootstrap";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Alert variant="danger">Error: {error}</Alert>
      </div>
    );
  }

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Product List</h2>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} className="mb-4" key={product.id}>
            <Card className="shadow-sm h-100">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                className="product-img"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-truncate">{product.title}</Card.Title>
                <Card.Text className="mt-auto">
                  <strong>Price: ${product.price}</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
