import { configureStore } from "@reduxjs/toolkit";
import photoReducer from 'features/Photo/photoSlice';

const rootReducer ={
    photos: photoReducer
}

const store = configureStore({
    reducer:rootReducer
});
// console.log(photoReducer);
export default store;