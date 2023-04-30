import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { GetKpisResponse, GetProductsResponse } from './types';

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}),
    reducerPath: "main",
    tagTypes: ["Kpis", "Products"],
    endpoints: (build) => ({
        getKpis: build.query<Array<GetKpisResponse>, void>({
            query: () => "/kpi",
            providesTags: ["Kpis"],
        }),
        getProducts: build.query<Array<GetProductsResponse>, void>({
            query: () => "/product",
            providesTags: ["Products"],
        }),
    }),
});

export const { useGetKpisQuery, useGetProductsQuery } = api;
