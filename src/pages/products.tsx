import { Container, Row, Col } from "react-bootstrap";
import { Product } from "../components/ecommerce";

const Products = () => {
  return (
    <Container>
      <Row>
        <Col xs={3} className="d-flex justify-content-center mb-5 mt-2">
          <Product />
        </Col>
        <Col xs={3} className="d-flex justify-content-center mb-5 mt-2">
          <Product />
        </Col>
        <Col xs={3} className="d-flex justify-content-center mb-5 mt-2">
          <Product />
        </Col>
        <Col xs={3} className="d-flex justify-content-center mb-5 mt-2">
          <Product />
        </Col>
        <Col xs={3} className="d-flex justify-content-center mb-5 mt-2">
          <Product />
        </Col>
        <Col xs={3} className="d-flex justify-content-center mb-5 mt-2">
          <Product />
        </Col>
        <Col xs={3} className="d-flex justify-content-center mb-5 mt-2">
          <Product />
        </Col>
        <Col xs={3} className="d-flex justify-content-center mb-5 mt-2">
          <Product />
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
