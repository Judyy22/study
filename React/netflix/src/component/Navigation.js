import React, { useState } from "react";
import { Navbar, Container, Form, Button, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/Actions/movieAction";

const Navigation = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [search, setSearch] = useState();

    const getkeyword = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    };

    const searchClick = (e) => {
        e.preventDefault();
        if (search != "") {
            dispatch(movieAction.getSearchMovie(search));
            navigate("/movies", { state: { search: search } });
        } else {
            dispatch(movieAction.getMovies());
            navigate("/movies");
        }
    };
    return (
        <Navbar className="nav-background" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand>
                    <Link to="/">
                        <img
                            width={100}
                            src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
                        />
                    </Link>
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
                        <Link to="/board" className="nav-tiem">
                            Board
                        </Link>
                        <Link
                            to="/like"
                            disabled="disabled"
                            className="disable"
                        >
                            My Favorite
                        </Link>
                    </Nav>

                    <Form className="d-flex">
                        <Form.Control
                            onChange={getkeyword}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                        />
                        <Button
                            className="button-color"
                            variant="danger"
                            onClick={searchClick}
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
