import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const getProductDetail = async () => {
        const [product, setProduct] = useState(null);
        const { id } = useParams();
        let url = `http://localhost:5000/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();

        setProduct(data);
    };

    useEffect(() => {
        getProductDetail();
    }, []);

    return (
        <div>
            <div>
                <img src={product.img} />
            </div>
        </div>
    );
};

export default ProductDetail;
