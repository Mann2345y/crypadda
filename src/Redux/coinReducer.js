import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUS = Object.freeze({
  LOADING: "loading",
  SUCCESS: "success",
  FAIL: "fail",
});

const coinSlice = createSlice({
  name: "coin",
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

export const { setData, setStatus } = coinSlice.actions;
export default coinSlice.reducer;

export const getCoinDetails = (coinId) => {
  return async function getCoinsThunk(dispatch) {
    try {
      dispatch(setStatus(STATUS.LOADING));
      const axiosinstance = axios.create({
        baseURL: "https://coinranking1.p.rapidapi.com/coin",
        params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "24h" },
        headers: {
          "X-RapidAPI-Key":
            "e2f5df08f1mshca0a2257a626bc3p1978d7jsnd3efc97e7289",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      });
      const { data } = await axiosinstance.get(`/${coinId}`);
      dispatch(setData(data.data.coin));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (error) {
      dispatch(setData(error));
      dispatch(setStatus(STATUS.FAIL));
    }
  };
};
