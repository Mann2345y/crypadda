import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/stats",
  params: { referenceCurrencyUuid: "yhjMzLPhuIDl" },
  headers: {
    "X-RapidAPI-Key": "e2f5df08f1mshca0a2257a626bc3p1978d7jsnd3efc97e7289",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

const STATUS = Object.freeze({
  LOADING: "loading",
  SUCCESS: "success",
  FAIL: "fail",
});

const statsSlice = createSlice({
  name: "stats",
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

export const { setData, setStatus } = statsSlice.actions;
export default statsSlice.reducer;

export const getStats = () => {
  return async function getStatsThunk(dispatch) {
    try {
      dispatch(setStatus(STATUS.LOADING));
      const { data } = await axios.request(options);
      dispatch(setData(data.data));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (error) {
      dispatch(setData(error));
      dispatch(setStatus(STATUS.FAIL));
    }
  };
};
