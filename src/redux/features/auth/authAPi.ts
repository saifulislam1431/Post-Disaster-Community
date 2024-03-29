import { baseApi } from "@/redux/baseApi/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        registerUser: builder.mutation({
            query:(userInfo)=>({
                url:"register",
                method:"POST",
                body: userInfo
            })
        }),
        login: builder.mutation({
            query:(userInfo)=>({
                url:"login",
                method:"POST",
                body: userInfo
            })
        })
    })
})


export const {useRegisterUserMutation, useLoginMutation} = authApi;