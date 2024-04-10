import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tagName = "sources";

export const sourceApi = createApi({
    reducerPath: "sourceApi",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
    tagTypes: [tagName],
    endpoints: (build) => ({
        getSources: build.query<any, void>({
            query: () => `sources?apiKey=${import.meta.env.VITE_API_KEY}`,
            providesTags: (result) => 
                result
                    ? // successful query
                        [
                        ...result.sources.map(({ id }: any) => ({ type: tagName, id } as const)),
                        { type: tagName, id: 'LIST' },
                        ]
                    : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                        [{ type: tagName, id: 'LIST' }],
        })
    })
})

export const {useGetSourcesQuery} = sourceApi