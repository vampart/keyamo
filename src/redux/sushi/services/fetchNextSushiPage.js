import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getSushiHasMore,
  getSushiLoading,
  getSushiPage,
} from "../selectors/sushiSelectors";
import { sushiActions } from "../slice/sushiSlice";
import { fetchSushi } from "./fetchSushi";

export const fetchNextSushiPage = createAsyncThunk(
  "sushi/fetchNextSushiPage",
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;

    const page = getSushiPage(getState());
    const hasMore = getSushiHasMore(getState());
    const loading = getSushiLoading(getState());

    if (hasMore && !loading) {
      dispatch(sushiActions.setPage(page + 1));
      dispatch(fetchSushi());
    }
  }
);
