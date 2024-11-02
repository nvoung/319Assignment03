import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, InputGroup, FormControl, Navbar, Nav } from "react-bootstrap";
import Logo from "./logo.png";

const TopNavBar = ({
  catalog,
  setCatalog,
  filteredCatalog,
  setFilteredCatalog,
  categories,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const clearSearch = () => {
    setSearchTerm(""); // Clear the input
    setFilteredCatalog(catalog); // Reset to full catalog
  };

  const filterCategory = (tag) => {
    const results = catalog.filter((eachProduct) => {
      return eachProduct.category === tag;
    });
    setFilteredCatalog(results);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    const results = catalog.filter((eachProduct) => {
      if (e.target.value === "") return catalog;
      return eachProduct.title
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setFilteredCatalog(results);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="w-100">
      <Navbar.Brand href="#">
        <img
          src={Logo}
          alt="Logo"
          className="d-inline-block align-top"
          style={{ height: "40px", marginRight: "20px"}}
        />{' '}
        NVDC Product Page
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {categories.map((tag) => (
            <Button
              variant="warning"
              className="mb-2 me-2 btn-sm"
              style={{ marginLeft: "20px"}}
              onClick={() => filterCategory(tag)}
              key={tag}
            >
              {tag}
            </Button>
          ))}
        </Nav>
        <InputGroup className="ms-auto" style={{ maxWidth: "400px" }}>
          <FormControl
            placeholder="Search products..."
            aria-label="Search products"
            value={searchTerm}
            onChange={handleChange}
          />
          <Button variant="outline-secondary" onClick={clearSearch}>
            <i className="bi bi-x"></i> {/* Bootstrap icon for clear */}
          </Button>
        </InputGroup>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavBar;
