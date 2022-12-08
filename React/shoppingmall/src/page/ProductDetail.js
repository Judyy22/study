import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction";

const ProductDetail = () => {
    const product = useSelector((state) => state.product.productDetail);
    let { id } = useParams();
    const dispatch = useDispatch;
    const getProductDetail = async () => {
        console.log("getproductdetail");
        dispatch(productAction.getProductDetail(id));
    };

    useEffect(() => {
        getProductDetail();
    }, []);

    return (
        <Container>
            <Row>
                <Col className="product-img">
                    <img src={product?.img} />
                </Col>
                <Col>
                    <div>{product?.title}</div>
                    <div>{product?.price}</div>
                    <div>
                        {product?.choice == true ? "Conscious choice" : ""}
                    </div>
                    <DropdownButton className="drop-down" title="사이즈 선택">
                        {product?.size.length > 0 &&
                            product.size.map((item) => (
                                <Dropdown.Item href="#/action-1">
                                    {item}
                                </Dropdown.Item>
                            ))}
                    </DropdownButton>
                    <Button variant="dark" className="add-button">
                        추가
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
