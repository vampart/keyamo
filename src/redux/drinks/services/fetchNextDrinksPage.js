import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDrinks } from "./fetchDrinks";
import { drinksActions } from "../slice/drinksSlice";
import {
  getDrinksHasMore,
  getDrinksLoading,
  getDrinksPage,
} from "../selectors/drinksSelectors";

export const fetchNextDrinksPage = createAsyncThunk(
  "drinks/fetchNextDrinksPage",
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;

    const page = getDrinksPage(getState());
    const hasMore = getDrinksHasMore(getState());
    const loading = getDrinksLoading(getState());

    if (hasMore && !loading) {
      dispatch(drinksActions.setPage(page + 1));
      dispatch(fetchDrinks());
    }
  }
);
