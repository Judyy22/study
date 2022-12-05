import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../component/ProductCard";

const ProductAll = () => {
    const [productList, setproductList] = useState([]);
    const getProducts = async () => {
        let url = `http://localhost:5000/products`;
        let response = await fetch(url);
        let data = await response.json();
        setproductList(data);
    };
    useEffect(() => {
        getProducts();
    }, []);
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
