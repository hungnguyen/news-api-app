import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { newsApi, sourceApi } from "../services";
import favoriteReducer  from "../slices/favoriteSlice";

export const store = configureStore({
    reducer: {
        favorites: favoriteReducer,
        [newsApi.reducerPath]: newsApi.reducer,
        [sourceApi.reducerPath]: sourceApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(newsApi.middleware)
            .concat(sourceApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch