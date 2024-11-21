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
    data: [],
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
        baseURL: "https://newsapi.org/v2/everything",
      });
      const { data } = await axiosinstance.get("", {
        params: {
          q: newscategory,
          apiKey: "47bac319131345b5962ab033857d2028",
          lang: "EN",
        },
      });
      console.log({ data });
      dispatch(setData(data?.articles?.slice(0, 15)));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (error) {
      dispatch(setData(error));
      dispatch(setStatus(STATUS.FAIL));
    }
  };
};
