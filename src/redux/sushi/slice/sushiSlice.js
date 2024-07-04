import { createSlice } from "@reduxjs/toolkit";
import { fetchSushi } from "../services/fetchSushi";

const initialState = {
  sushi: [],
  isLoading: false,
  errors: null,
  page: 0,
  limit: 4,
  hasMore: true,
};

export const sushiSlice = createSlice({
  name: "sushi",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSushi.pending, (state) => {
      state.errors = null;
      state.isLoading = true;
    });

    builder.addCase(fetchSushi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.sushi = [...state.sushi, ...action.payload];
      state.hasMore = action.payload.length >= state.limit;
    });

    builder.addCase(fetchSushi.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});

export const { actions: sushiActions } = sushiSlice;

export const { reducer: sushiReducer } = sushiSlice;
