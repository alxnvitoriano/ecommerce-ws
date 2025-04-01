import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { typeProduct } from "@customTypes/product";

type responseType = typeProduct[];

const actGetProductsByCatPrefix = createAsyncThunk(
  "products/actGetProductsByCatPrefix",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<responseType>(
        `/products?cat_prefix=${prefix}`
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
