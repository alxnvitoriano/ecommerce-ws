import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { typeCategory } from "@customTypes/category";
import { axiosErrorHandler } from "../../../utils";

type responseType = typeCategory[];

const actGetCategories = createAsyncThunk(
  "categorias/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<responseType>("/categories");
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetCategories;
