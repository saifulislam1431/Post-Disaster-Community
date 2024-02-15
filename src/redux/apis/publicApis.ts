import { baseApi } from "../baseApi/baseApi";

const publicApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllPost: builder.query({
            query:()=>({
                url:"all-post",
                method:"GET"
            })
        })
    })
});

export const {useGetAllPostQuery} = publicApi;