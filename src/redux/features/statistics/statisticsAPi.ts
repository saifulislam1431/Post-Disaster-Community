import { baseApi } from "@/redux/baseApi/baseApi";

const statisticsApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getStatisticsData: builder.query({
            query:()=>({
                url:"statistics-data",
                method:"GET",
            })
        }),
    })
})


export const {useGetStatisticsDataQuery} = statisticsApi;