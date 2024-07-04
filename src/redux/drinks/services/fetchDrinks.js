import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDrinksLimit, getDrinksPage } from "../selectors/drinksSelectors";

export const fetchDrinks = createAsyncThunk(
  "drinks/fetchDrinks",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    const page = getDrinksPage(getState());
    const limit = getDrinksLimit(getState());

    try {
      const response = await $api.get("/other", {
        params: {
          _limit: limit,
          _page: page,
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue("Sorry, the drinks were not received from the server");
    }
  }
);
