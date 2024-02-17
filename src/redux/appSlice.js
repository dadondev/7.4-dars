import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    datas: [],
  },
  reducers: {
    newRequest: (state, { payload }) => {
      state.datas.push(payload);
      console.log(payload);
    },
    filterRequests: (state, { payload }) => {
      console.log(state.datas);
      state.datas = state.datas.filter((r) => r.id !== payload);
    },
  },
});

export default appSlice;
