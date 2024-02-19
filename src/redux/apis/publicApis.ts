import { baseApi } from "../baseApi/baseApi";

const publicApi = baseApi.injectEndpoints({
    
    endpoints:(builder)=>({
        getAllPost: builder.query({
            query:()=>({
                url:"all-post",
                method:"GET"
            }),
            providesTags:["posts"]
        }),
        getAllTestimonial: builder.query({
            query: ()=>({
                url: "all-testimonial",
                method: "GET"
            })
        }),
        getAllGallery: builder.query({
            query: ()=>({
                url: "all-work-portfolio",
                method: "GET"
            })
        }),
        getAllEvents: builder.query({
            query: ()=>({
                url: "upcoming-events",
                method: "GET"
            })
        }),
        getSinglePost: builder.query({
            query: (id)=>({
                url: `single-post-details/${id}`,
                method: "GET"
            })
        })
    })
});

export const {useGetAllPostQuery, useGetAllTestimonialQuery, useGetAllGalleryQuery, useGetAllEventsQuery, useGetSinglePostQuery} = publicApi;