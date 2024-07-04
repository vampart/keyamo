import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const params = {
  _limit: 4,
  _sort: "rating",
  _order: "desc",
};

export const rtkApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: __API__ }),
  endpoints: (builder) => ({
    getPizzas: builder.query({
      query: () => ({
        url: "/pizzas",
        params: params,
      }),
    }),
    getSushi: builder.query({
      query: () => ({
        url: "/rolls",
        params: params,
      }),
    }),
    getDrinks: builder.query({
      query: () => ({
        url: "/other",
        params: params,
      }),
    }),
  }),
});

export const useGetPizzas = rtkApi.useGetPizzasQuery;
export const useGetSushi = rtkApi.useGetSushiQuery;
export const useGetDrinks = rtkApi.useGetDrinksQuery;
