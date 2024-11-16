import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const FAKE_API_URL = "https://fakestoreapi.com/products";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(FAKE_API_URL);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Our Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.title} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description.slice(0, 100)}...</Card.Text>
                <h5>${product.price}</h5>
                <Button variant="primary">
                  <Link
                    to={`products/${product.id}`}
                    state={product}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    View Details
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductsPage;
