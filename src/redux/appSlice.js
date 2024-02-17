import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    datas: [],
  },
  reducers: {
    newRequest: (state, { payload }) => {
      state.datas.push(payload);
    },
    filterRequests: (state, { payload }) => {
      state.datas = state.datas.filter((r) => r.id !== payload);
    },
    getSingleRequest: (state, { payload }) => {
      return state.datas.find((r) => r.id === payload);
    },
  },
});

export default appSlice;
