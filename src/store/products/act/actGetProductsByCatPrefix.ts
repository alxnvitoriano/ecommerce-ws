import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { typeCategory } from "@customTypes/category";

type responseType = typeCategory[];

const actGetProductsByCatPrefix = createAsyncThunk(
  "produtos/actGetProductsByCatPrefix",
  async (prefix, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<responseType>(
        `http://localhost:5005/products?cat_prefix=${prefix}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      } else {
        return rejectWithValue("Aconteceu um erro inesperado");
      }
    }
  }
);

export default actGetProductsByCatPrefix;
