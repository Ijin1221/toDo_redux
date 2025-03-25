import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const inputItemDetails = {
        item: action.payload,
        id: state.items.length + 1,
        completed: false,
      };
      state.items.push(inputItemDetails);
      console.log(state);
    },
    deleteItem: (state, action) => {
      console.log(action.payload);
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const findItems = state.items.find((item) => item.id == action.payload);
      if (findItems) {
        findItems.completed = !findItems.completed;
      }
      console.log(state);
      
    },
  },
});

export const { addItem, deleteItem, toggleComplete } = toDoSlice.actions;
export default toDoSlice.reducer;
