import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './reducers/categories.js'

const store = configureStore({
    reducer: {
        categories: categoriesSlice
    }
});

export default store;