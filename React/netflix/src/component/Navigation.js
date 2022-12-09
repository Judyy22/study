import React from "react";
import { Navbar, Container, Form, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <Navbar className="nav-background" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img
                        width={100}
                        src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Link to="/" className="nav-tiem">
                            Home
                        </Link>
                        <Link to="/movies" className="nav-tiem">
                            Movies
                        </Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button className="button-color" variant="danger">
                            Search
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
