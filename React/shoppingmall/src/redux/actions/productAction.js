import { productActions } from "../reducers/productReducer";

function getProducts(searchQuery) {
    return async (dispatch) => {
        let url = `http://localhost:5000/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
        // dispatch(productActions.getAllProducts({ data }));
    };
}

function getProductDetail(id) {
    return async (dispatch) => {
        console.log("디테일 액션이다아");
        let url = `http://localhost:5000/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log("data", data);
        dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: { data } });
    };
}

export const productAction = { getProducts, getProductDetail };
