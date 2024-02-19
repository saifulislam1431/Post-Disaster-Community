import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: "baseApi",
    tagTypes:["posts"],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/v1/",
        credentials: "include"
    }),
    endpoints: ()=>({})
})