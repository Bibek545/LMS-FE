import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice.js";
import bookReducer from "../features/book/bookSlice.js";
import cartReducer from "../components/cart/cartSlice.js";
import borrowReducer from "../features/borrow/borrowSlice.js"
import systemReducer from '../features/system/systemSlice.js'


import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const cartPersistConfig = {
  key: "cart",
  storage,
};

const rootReducer = combineReducers({
  userInfo: userReducer,
  bookInfo: bookReducer,
  cartInfo: persistReducer(cartPersistConfig, cartReducer),
  borrowInfo: borrowReducer,
  systemInfo: systemReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export const persistor = persistStore(store);
// window.store = store;
export default store;
