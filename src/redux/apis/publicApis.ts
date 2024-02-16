import { baseApi } from "../baseApi/baseApi";

const publicApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllPost: builder.query({
            query:()=>({
                url:"all-post",
                method:"GET"
            })
        }),
        getAllTestimonial: builder.query({
            query: ()=>({
                url: "all-testimonial",
                method: "GET"
            })
        })
    })
});

export const {useGetAllPostQuery, useGetAllTestimonialQuery} = publicApi;