import React from "react";
import {
  Container,
  Dropdown,
  FormControl,
  Navbar,
  Nav,
  Badge,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" varient="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <a href="/">Shopping Cart</a>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a Product"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown alignright="true">
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>10</Badge>
            </Dropdown.Toggle>
          </Dropdown>

          <Dropdown.Menu style={{ minWidth: 370 }}>
            <span style={{ padding: 10 }}>Cart is Empty</span>
          </Dropdown.Menu>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
