import { configureStore } from "@reduxjs/toolkit";
import statsReducer from "./statsReducer";
import coinsReducer from "./coinsReducer";
import newsReducer from "./newsReducer";
import coinReducer from "./coinReducer";
import coinhistoryReducer from "./coinhistoryReducer";

const store = configureStore({
  reducer: {
    stats: statsReducer,
    coins: coinsReducer,
    coinDetail: coinReducer,
    coinHistory: coinhistoryReducer,
    news: newsReducer,
  },
});
export default store;
