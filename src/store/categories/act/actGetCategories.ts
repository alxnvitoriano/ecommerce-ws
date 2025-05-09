import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { typeCategory } from "@types";
import { axiosErrorHandler } from "@utils";

type responseType = typeCategory[];

const actGetCategories = createAsyncThunk(
  "categorias/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const response = await axios.get<responseType>("/categories", { signal });
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetCategories;
