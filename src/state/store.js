import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { usersReducer } from "./usersSlice";
import { todoReducer } from "./todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    todoList: todoReducer
  }
})