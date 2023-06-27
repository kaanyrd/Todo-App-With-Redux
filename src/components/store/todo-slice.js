import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  // todos: [],
  todos: JSON.parse(localStorage.getItem("items")) || [],
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
    editTodo(state, action) {
      const updatedTodo = action.payload;
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === updatedTodo.id
      );
      if (todoIndex !== -1) {
        state.todos[todoIndex] = updatedTodo;
      }
    },
    delete(state, action) {
      const deletedItem = action.payload;
      state.todos = state.todos.filter((item) => item.id !== deletedItem);
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;
