import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByCatPrefix from "./act/actGetProductsByCatPrefix";
import { typeLoading } from "@customTypes/shared";
import { typeCategory } from "@customTypes/category";

interface categoriesState {
  records: typeCategory[];
  loading: typeLoading;
  error: string | null;
}

const initialState: categoriesState = {
  records: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "categorias",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetProductsByCatPrefix.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByCatPrefix.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetProductsByCatPrefix.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export { actGetProductsByCatPrefix };
export default productsSlice.reducer;
