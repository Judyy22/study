import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
    const [productList, setproductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getProducts = async () => {
        let searchQuery = query.get("q") || "";
        console.log("searchQuery", searchQuery);
        let url = `https://my-json-server.typicode.com/judyy22/shoppingmall/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setproductList(data);
        console.log("data",url);
    };
    useEffect(() => {
        getProducts();
    }, [query]);
    return (
        <div>
            <Container>
                <Row>
                    {productList.map((menu) => (
                        <Col lg={3}>
                            <ProductCard item={menu} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductAll;
