import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSushiLimit, getSushiPage } from "../selectors/sushiSelectors";

export const fetchSushi = createAsyncThunk(
  "sushi/fetchSushi",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    const page = getSushiPage(getState());
    const limit = getSushiLimit(getState());

    try {
      const response = await $api.get("/rolls", {
        params: {
          _limit: limit,
          _page: page,
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue("Sorry, the sushi was not received from the server");
    }
  }
);
