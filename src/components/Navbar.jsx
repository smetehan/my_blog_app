import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { logout } from "../auth/firebase";
import { AuthContext } from "../context/AuthContext";

function NavBar() {
  const { currentUser } = useContext(AuthContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="blog">Blog</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            {!currentUser && <Nav.Link href="login">Login</Nav.Link>}
            {!currentUser && <Nav.Link href="register">Register</Nav.Link>}
            {currentUser && (
              <Nav.Link href="/" onClick={() => logout()}>
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
