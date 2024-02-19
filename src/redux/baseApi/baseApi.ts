import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: "baseApi",
    tagTypes:["posts"],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://post-disaster-supply-chain.vercel.app/api/v1/",
        credentials: "include"
    }),
    endpoints: ()=>({})
})