let initalState = {
    productListL: [],
};

function productReducer(state = initalState, action) {
    let { type, payload } = action;
    switch (type) {
        case "GET_PRODUCT_SUCCESS":
            return { ...state, productList: payload.data };
        default:
            return { ...state };
    }
}

export default productReducer;
