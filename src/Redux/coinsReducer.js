import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUS = Object.freeze({
  LOADING: "loading",
  SUCCESS: "success",
  FAIL: "fail",
});

const coinsSlice = createSlice({
  name: "coins",
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

export const { setData, setStatus } = coinsSlice.actions;
export default coinsSlice.reducer;

export const getCoins = (limit, offset, filter, order) => {
  return async function getCoinsThunk(dispatch) {
    try {
      dispatch(setStatus(STATUS.LOADING));
      const axiosinstance = axios.create({
        baseURL: "https://coinranking1.p.rapidapi.com/coins",
        headers: {
          "X-RapidAPI-Key":
            "e2f5df08f1mshca0a2257a626bc3p1978d7jsnd3efc97e7289",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          timePeriod: "24h",
          orderBy: filter ? filter : "marketCap",
          orderDirection: order ? "asc" : "desc",
          limit: limit ? limit : 50,
          offset: offset ? offset : 0,
        },
      });
      const { data } = await axiosinstance.get("/");
      dispatch(setData(data.data.coins));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (error) {
      dispatch(setData(error));
      dispatch(setStatus(STATUS.FAIL));
    }
  };
};
