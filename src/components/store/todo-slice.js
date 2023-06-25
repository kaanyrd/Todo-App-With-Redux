import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialValues,
  reducers: {
    addTodo(state, action) {
      state.todos = [...state.todos, action.payload];
    },
    clearAll(state) {
      state.todos = [];
    },
    delete() {},
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;
