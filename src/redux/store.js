import { configureStore } from "@reduxjs/toolkit";
import { rtkApi } from "@/api/rtkApi";
import { pizzasReducer } from "./pizzas/slice/pizzasSlice";
import { sushiReducer } from "./sushi/slice/sushiSlice";
import { drinksReducer } from "./drinks/slice/drinksSlice";
import { productReducer } from "./productItem/slice/productItemSlice";
import { basketReducer } from "./basket/slice/basketSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "totalPrice",
  storage,
};

const persistedReducer = persistReducer(persistConfig, basketReducer);

export const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    sushi: sushiReducer,
    drinks: drinksReducer,
    product: productReducer,
    basket: persistedReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      rtkApi.middleware
    ),
});

export const persistor = persistStore(store);
