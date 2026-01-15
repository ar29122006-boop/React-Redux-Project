import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./features/SearchSlice"
import CollectionReducer from "./features/CollectionSlice"

export const store = configureStore({
    reducer:{
        search: SearchReducer,
        collection: CollectionReducer



    },
})