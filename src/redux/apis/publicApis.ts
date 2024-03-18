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
            }),
            providesTags:["testimonial"]
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
        }),
        getDonationData: builder.query({
            query: ()=>({
                url: "donors-data-by-donation",
                method: "GET"
            })
        }),
        postVolunteer: builder.mutation({
            query: (data)=>({
                url: "create-volunteer",
                method: "POST",
                body: data
            })
        }),
        getVolunteers: builder.query({
            query: ()=>({
                url: "get-all-volunteer",
                method: "GET"
            })
        }),
        getCommunityPost: builder.query({
            query:()=>({
                url:"post-community-post",
                method:"GET",
            }),
            providesTags:["communityPost"]
        }),
    })
});

export const {useGetAllPostQuery, useGetAllTestimonialQuery, useGetAllGalleryQuery, useGetAllEventsQuery, useGetSinglePostQuery, useGetDonationDataQuery, usePostVolunteerMutation, useGetVolunteersQuery, useGetCommunityPostQuery} = publicApi;