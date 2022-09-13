import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUS = Object.freeze({
  LOADING: "loading",
  SUCCESS: "success",
  FAIL: "fail",
});

const coinhistorySlice = createSlice({
  name: "coinhistory",
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

export const { setData, setStatus } = coinhistorySlice.actions;
export default coinhistorySlice.reducer;

export const getCoinHistory = (coinId, timeperiod) => {
  return async function getCoinHistoryThunk(dispatch) {
    try {
      dispatch(setStatus(STATUS.LOADING));
      const axiosinstance = axios.create({
        baseURL: `https://coinranking1.p.rapidapi.com/coin/${coinId}/history`,
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          timePeriod: timeperiod,
        },
        headers: {
          "X-RapidAPI-Key":
            "e2f5df08f1mshca0a2257a626bc3p1978d7jsnd3efc97e7289",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      });
      const { data } = await axiosinstance.get("");
      dispatch(setData(data?.data));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (error) {
      dispatch(setData(error));
      dispatch(setStatus(STATUS.FAIL));
    }
  };
};
