import { createSlice } from "@reduxjs/toolkit";
import { fetchDrinks } from "../services/fetchDrinks";

const initialState = {
  drinks: [],
  isLoading: false,
  errors: null,
  page: 0,
  limit: 4,
  hasMore: true,
};

export const drinksSlice = createSlice({
  name: "drinks",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDrinks.pending, (state) => {
      state.errors = null;
      state.isLoading = true;
    });

    builder.addCase(fetchDrinks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.drinks = [...state.drinks, ...action.payload];
      state.hasMore = action.payload.length >= state.limit;
    });

    builder.addCase(fetchDrinks.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});

export const { actions: drinksActions } = drinksSlice;

export const { reducer: drinksReducer } = drinksSlice;
