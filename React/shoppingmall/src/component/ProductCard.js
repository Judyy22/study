import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    const showProduct = (id) => {
        navigate(`/product/${id}`);
    };
    return (
        <div className="card" onClick={() => showProduct(item.id)}>
            <img src={item?.img} />
            <div>{item?.choice == true ? "Conscious choice" : ""}</div>
            <div>{item?.title}</div>
            <div>₩{item?.price}</div>
            <div>{item?.new == true ? "신제품" : ""}</div>
        </div>
    );
};

export default ProductCard;
