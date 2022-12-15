import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MovieList from "../component/MovieList";
import SideBar from "../component/SideBar";

const Movies = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [movieList, setMovieList] = useState(null);

    const getNowPlaying = async () => {
        let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`;
        let response = await fetch(url);
        let data = await response.json();
        setMovieList(data.results);
        console.log("movieList", data.results);
    };
    useEffect(() => {
        getNowPlaying();
    }, []);

    return (
        <Container>
            <Row>
                <Col sm={3}>
                    <SideBar />
                </Col>
                <Col sm={9}>
                    {movieList.map((item) => (
                        <MovieList item={item} />
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default Movies;
