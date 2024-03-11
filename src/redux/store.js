import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./slice";

const store = configureStore({
  reducer: {
    weatherapp: weatherSlice,
  },
});

export default store;
