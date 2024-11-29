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
        baseURL: "https://min-api.cryptocompare.com/data/v2/news/",
      });
      const { data } = await axiosinstance.get("", {
        params: {
          categories: newscategory,
          api_key:
            "7c0073699c7ee7c7dd95d029ae59b6826008f0e07d99a055b6e2f374c7c821fd",
          lang: "EN",
        },
      });
      console.log({ data });
      dispatch(setData(data?.Data?.slice(0, 15)));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (error) {
      dispatch(setData(error));
      dispatch(setStatus(STATUS.FAIL));
    }
  };
};
