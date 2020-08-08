import { configureStore } from "@reduxjs/toolkit";
import photoReducer from 'features/Photo/photoSlice';
import paginationReducer from 'features/paginationSlice';

const rootReducer ={
    photos: photoReducer,
    pagination:paginationReducer
}

const store = configureStore({
    reducer:rootReducer
});
// console.log(photoReducer);
export default store;