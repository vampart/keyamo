import { createSlice } from "@reduxjs/toolkit";
import { fetchProductItem } from "../services/fetchProductItem";

const initialState = {
  product: [],
  isLoading: false,
  errors: null,
  size: undefined,
  type: undefined,
  price: undefined,
  pieces: undefined,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSize(state, action) {
      state.size = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    setPrice(state, action) {
      state.price = action.payload;
    },
    setPieces(state, action) {
      state.pieces = action.payload;
    },
    setClear(state) {
      state.size = undefined ;
      state.type = undefined ;
      state.price = undefined ;
      state.pieces = undefined ;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductItem.pending, (state) => {
      state.errors = null;
      state.isLoading = true;
    });

    builder.addCase(fetchProductItem.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    });

    builder.addCase(fetchProductItem.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});

export const { actions: productActions } = productSlice;

export const { reducer: productReducer } = productSlice;
