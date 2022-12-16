import React, { useState } from "react";
import { Navbar, Container, Form, Button, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/Actions/movieAction";

const Navigation = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState();
    const { searchMovie } = useSelector((state) => state.movie);
    console.log("searchMovieeeeeeeee", searchMovie);

    const getSearch = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    };

    console.log("search???", search);
    const searchClick = (e) => {
        e.preventDefault();
        if (search != "") {
            dispatch(movieAction.getSearchMovie(search));
        } else {
            dispatch(movieAction.getMovies);
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
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            onChange={getSearch}
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
