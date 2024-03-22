import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: "idle",
};

export const fetchweather = createAsyncThunk("weather/get", async (datas) => {
  try {
    if (!datas || datas.trim() === "") {
      const data = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=Kerala&appid=1124ead6a7afed5b553176f1442dfc9c"
      );
      console.log(data);
      return data;
    } else {
      const data = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          datas
        )}&appid=1124ead6a7afed5b553176f1442dfc9c`
      );
      return data;
    }
  } catch (error) {
    console.log(error);
  }
});

export const weatherSlice = createSlice({
  name: "weatherapp",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchweather.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchweather.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(fetchweather.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export default weatherSlice.reducer;
