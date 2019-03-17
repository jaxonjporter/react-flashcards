import React from "react";
import { Nav, } from "react-bootstrap";
import { Link,} from "react-router-dom";

const Navbar = () => (
  <Nav fill variant="tabs" defaultActiveKey="/home" className="bg-dark">
    <Link to="/" className="text-light">
      <Nav.Item>
        <Nav.Link as="h6" className="navcolor" style={{margin: 0}}>Home</Nav.Link>
      </Nav.Item>
    </Link>
    <Link to="/about" className="text-light">
      <Nav.Item>
        <Nav.Link as="h6" className="navcolor" style={{margin: 0}}>About</Nav.Link>
      </Nav.Item>
    </Link>
    <Link to="/flashcards" className="text-light">
      <Nav.Item>
        <Nav.Link as="h6" className="navcolor" style={{margin: 0}}>Flash Cards</Nav.Link>
      </Nav.Item>
    </Link>
  </Nav>
)

export default Navbar;
