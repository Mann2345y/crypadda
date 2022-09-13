import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUS = Object.freeze({
  LOADING: "loading",
  SUCCESS: "success",
  FAIL: "fail",
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    data: {},
    status: STATUS.SUCCESS,
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setData, setStatus } = newsSlice.actions;
export default newsSlice.reducer;

export const getNews = (newscategory, count) => {
  return async function getNewsThunk(dispatch) {
    try {
      dispatch(setStatus(STATUS.LOADING));
      const axiosinstance = axios.create({
        baseURL: "https://bing-news-search1.p.rapidapi.com/news/search",
        params: {
          q: newscategory,
          count: count,
          textDecorations: "true",
          freshness: "Day",
          safeSearch: "Off",
        },
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key":
            "e2f5df08f1mshca0a2257a626bc3p1978d7jsnd3efc97e7289",
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
      });
      const { data } = await axiosinstance.get("");
      dispatch(setData(data.value));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (error) {
      dispatch(setData(error));
      dispatch(setStatus(STATUS.FAIL));
    }
  };
};
