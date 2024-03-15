import { baseApi } from "@/redux/baseApi/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder)=>({
        deletePost: builder.mutation({
            query:(id)=>({
                url:`delete-post/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["posts"]
        }),
        updatePost: builder.mutation({
            query:(data)=>({
                url:`update-post/${data?.id}`,
                method:"PATCH",
                body: data?.data
            }),
            invalidatesTags:["posts"]
        }),
        addPost: builder.mutation({
            query:(data)=>({
                url:"add-post",
                method:"POST",
                body: data
            }),
            invalidatesTags:["posts"]
        }),
        addTestimonial: builder.mutation({
            query:(data)=>({
                url:"create-new-testimonial",
                method:"POST",
                body: data
            }),
            invalidatesTags:["testimonial"]
        }),
        
    })
})

export const {useDeletePostMutation, useAddPostMutation, useUpdatePostMutation, useAddTestimonialMutation} = userApi;