import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "../../../utils";
import { typeProduct } from "@customTypes/product";

type typeResponse = typeProduct[];

const actGetWishList = createAsyncThunk(
  "wishlist/actGetWishList",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue } = thunkAPI;
    try {
      const userWishlist = await axios.get<{ productId: number }[]>(
        "/wishlist?userId=1"
      );

      if (!userWishlist.data.length) {
        return fulfillWithValue([]);
      }

      const concatenatedItemsId = userWishlist.data
        .map((el) => `id=${el.productId}`)
        .join("&");

      const response = await axios.get<typeResponse>(
        `/products?${concatenatedItemsId}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetWishList;
