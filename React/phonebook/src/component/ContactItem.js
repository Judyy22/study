import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const ContactItem = ({ item }) => {
    return (
        <div className="contact-item">
            <Row>
                <Col lg="2">
                    <img
                        className="profile"
                        src="https://s3-ap-northeast-1.amazonaws.com/ojuz-attach/profile/images/GioChkhaidze"
                    />
                </Col>
                <Col lg="10">
                    <h4>{item.name}</h4>
                    <p>{item.phoneNumber}</p>
                </Col>
            </Row>
        </div>
    );
};

export default ContactItem;
