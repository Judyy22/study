function getProducts(searchQuery) {
    return async (dispatch, getState) => {
        let url = `http://localhost:5000/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
    };
}

export const productAction = { getProducts };
