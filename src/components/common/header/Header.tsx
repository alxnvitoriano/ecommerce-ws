import { NavLink } from "react-router-dom";
import { HeaderBasket, HeaderWishlist } from "../../ecommerce";
import { Badge, Navbar, Container, Nav } from "react-bootstrap";

import styles from "./styles.module.css";
const { headerContainer, headerLogo, headerLeftBar } = styles;

const Header = () => {
  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>Polly</span> <Badge bg="info">Pratas</Badge>
        </h1>
        <div className={headerLeftBar}>
          <HeaderWishlist />
          <HeaderBasket />
        </div>
      </div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link as={NavLink} to="categories">
                Categorias
              </Nav.Link>
              <Nav.Link as={NavLink} to="about-us">
                Sobre
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="register">
                Registre-se
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
