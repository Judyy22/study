function getProducts() {
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/judyy22/shoppingmall/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setproductList(data);
    };
}

export default productAction;
