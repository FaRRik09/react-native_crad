import React, { createContext, useReducer } from "react";
import axios from "axios";

export const productsContext = createContext();

const API = "http://192.168.0.66:8000/products";

const INIT_STATE = {
  products: [],
  oneProduct: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
  }
};

export default function ProductsContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProducts() {
    try {
      const res = await axios.get(API);
      console.log("res: ", res);
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
    } catch (error) {
      console.log("error: ", error);
    }
  }

  async function createProduct(product) {
    await axios.post(API, product);
    getProducts();
  }

  async function getOneProduct(id) {
    let res = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: res.data,
    });
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  async function editProduct(product, id) {
    await axios.patch(`${API}/${id}`, product);
    getProducts();
  }

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        oneProduct: state.oneProduct,
        getProducts,
        createProduct,
        getOneProduct,
        deleteProduct,
        editProduct,
      }}
    >
      {children}
    </productsContext.Provider>
  );
}
