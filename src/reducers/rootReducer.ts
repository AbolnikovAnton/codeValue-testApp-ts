import { createSlice } from "@reduxjs/toolkit";
import { initStateType } from "./types/rootReducerTypes";

const initialState: initStateType = {
  products: [
    {
      id: 1,
      name: "Product 1",
      description: "First product description",
      price: 11,
      creationDate: new Date().toString(),
    },
    {
      id: 2,
      name: "Product 2",
      description: "Second product description",
      price: 22,
      creationDate: new Date().toString(),
    },
    {
      id: 3,
      name: "Product 3",
      description: "Third product description",
      price: 33,
      creationDate: new Date().toString(),
    },
    {
      id: 4,
      name: "Product 4",
      description: "Fourth product description",
      price: 44,
      creationDate: new Date().toString(),
    },
    {
      id: 5,
      name: "Product 5",
      description: "Fifth product description",
      price: 55,
      creationDate: new Date().toString(),
    },
    {
      id: 6,
      name: "Product 6",
      description: "Sixth product description",
      price: 66,
      creationDate: new Date().toString(),
    },
  ],
  selectedProduct: null,
  selectedName: "",
  maxId: 6,
  filterText: "",
  sortBy: "name",
  currentPage: 1,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    editProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
      state.selectedName = action.payload ? action.payload.name : "";
    },
    changeSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    filterProducts: (state, action) => {
      state.filterText = action.payload;
    },
    sortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  addProduct,
  editProduct,
  deleteProduct,
  selectProduct,
  changeSelectedProduct,
  filterProducts,
  sortBy,
  changePage,
} = productSlice.actions;

export default productSlice.reducer;
