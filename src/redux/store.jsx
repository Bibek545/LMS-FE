import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice.js'
import bookReducer from '../features/book/bookSlice.js'



const store =  configureStore({
    reducer: {
        userInfo: userReducer,
        bookInfo: bookReducer,
    },
});
window.store = store;  
export default store;