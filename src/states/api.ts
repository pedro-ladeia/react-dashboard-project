import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from './types';

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}),
    reducerPath: "main",
    tagTypes: ["Kpis", "Products", "Transactions"],
    endpoints: (build) => ({ 
        getKpis: build.query<Array<GetKpisResponse>, void>({ //Making a query of KPI
            query: () => "/kpi",
            providesTags: ["Kpis"],
        }), //Create a query for kpi
        getProducts: build.query<Array<GetProductsResponse>, void>({ //Making a query of Products
            query: () => "/product",
            providesTags: ["Products"],
        }),//Create a query for product
        getTransactions: build.query<Array<GetTransactionsResponse>, void>({ //Making a query of Transactions
            query: () => "/transaction",
            providesTags: ["Transactions"],
        }), //Create a query for transaction
    }),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api;
