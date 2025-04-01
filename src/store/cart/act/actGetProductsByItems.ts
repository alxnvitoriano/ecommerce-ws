import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import axios from "axios";
import { typeProduct } from "@customTypes/product";

type typeResponse = typeProduct[];

const actGetProductsByItems = createAsyncThunk(
  "cart/actGetProductsByItems",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { cart } = getState() as RootState;
    const itemsId = Object.keys(cart.items);
    const concatenatedItemsId = itemsId.map((el) => `id=${el}`).join("&");
    try {
      const response = await axios.get<typeResponse>(
        `/products?${concatenatedItemsId}`
      );

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("Aconteceu um erro inesperado");
      }
    }
  }
);

export default actGetProductsByItems;
