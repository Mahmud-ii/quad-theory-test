import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const url =
  "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10";

const initialState = {
  cardItems: [],
  isLoading: true,
  formOpen: false,
  translate: 0,
};

export const getCardItems = createAsyncThunk(
  "cart/getCardItems",
  async (name, thunkAPI) => {
    try {
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      let newItemObj = {
        Id: uuidv4(),
        ImageUrl: newItem.imageUrl,
        Name: newItem.name,
        IsPopular: newItem.popular,
        IsRecommended: newItem.recommended,
        Price: newItem.price,
      };
      state.cardItems.push(newItemObj);
    },
    slideNext: (state, action) => {
      state.translate = 5;
    },
    slidePrev: (state, action) => {
      state.translate = -5;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCardItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCardItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cardItems = action.payload.Items;
      })
      .addCase(getCardItems.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

// console.log(cardSlice);
export const { addItem, slideNext, slidePrev } = cardSlice.actions;

export default cardSlice.reducer;
