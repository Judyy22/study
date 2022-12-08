import { createSlice } from "@reduxjs/toolkit";

let initalState = {
    productList: [],
    productDetail: null,
};

// function productReducer(state = initalState, action) {
//     let { type, payload } = action;
//     switch (type) {
//         case "GET_PRODUCT_SUCCESS":
//             return { ...state, productList: payload.data };
//         case "GET_PRODUCT_DETAIL":
//             console.log("디테일 리듀서다아");
//             return { ...state, productDetail: payload.data };
//         default:
//             return { ...state };
//     }
// }

// export default productReducer;

const productSlice = createSlice({
    name: "product",
    initalState,
    reducers: {
        getAllProducts(state, action) {
            state.productList = action.payload.data;
        },
        getSingleProduct(state, action) {
            state.productDetail = action.payload.data;
        },
    },
});

console.log("ppppp", productSlice);

export const productActions = productSlice.actions;
export default productSlice.reducer;
