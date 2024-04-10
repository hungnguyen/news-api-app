import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tagName = "news";
const date = new Date();

const processResult = (result: any) => {
    return result
        ? // successful query
            [
            ...result.articles.filter((x:any) => x.title !== "[Removed]").map(({ url: id }: any) => ({ type: tagName, id } as const)),
            { type: tagName, id: 'LIST' },
            ]
        : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
            [{ type: tagName, id: 'LIST' }]
}

export const newsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
    tagTypes: [tagName],
    endpoints: (build) => ({
        getEverything: build.query<any, string>({
            query: (data) => `/everything?q=${data}&from=${date.getFullYear()}-${date.getMonth()}-${date.getDate()}&sortBy=publishedAt&apiKey=${import.meta.env.VITE_API_KEY}`,
            providesTags: processResult
        }),
        getBySource: build.query<any, string>({
            query: (data) => `/top-headlines?sources=${data}&apiKey=${import.meta.env.VITE_API_KEY}`,
            providesTags: processResult
        }),
        getByCategory: build.query<any, string>({
            query: (data) => `/top-headlines?category=${data}&apiKey=${import.meta.env.VITE_API_KEY}`,
            providesTags: processResult
        }),
        getByCountry: build.query<any, string>({
            query: (data) => `/top-headlines?country=${data}&apiKey=${import.meta.env.VITE_API_KEY}`,
            providesTags: processResult
        }),
    })
})

export const {useGetEverythingQuery, useGetByCategoryQuery, useGetByCountryQuery, useGetBySourceQuery} = newsApi