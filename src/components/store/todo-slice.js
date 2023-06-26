import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  todos: [
    // {
    //   id: 1,
    //   todo: "Learn React.js",
    //   date: "22:45:45 2023/06/25",
    // },
    // {
    //   id: 2,
    //   todo: "Learn Redux.js",
    //   date: "22:45:45 2023/06/26",
    // },
    // {
    //   id: 3,
    //   todo: "Learn Node.js",
    //   date: "22:45:45 2023/06/27",
    // },
    // {
    //   id: 4,
    //   todo: "Learn Redux Saga",
    //   date: "22:45:45 2023/06/27",
    // },
    // {
    //   id: 5,
    //   todo: "Learn Redux Thunk",
    //   date: "22:45:45 2023/06/28",
    // },
    // {
    //   id: 6,
    //   todo: "Learn Express.js",
    //   date: "22:45:45 2023/06/29",
    // },
  ],
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
