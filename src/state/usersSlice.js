import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: '',
  list: [
    {id: 1, name: "Охотник Селиван"},
    {id: 2, name: "Дед Вовка"},
    {id: 3, name: "Александр Петров"},
    {id: 4, name: "Фёдор Пнёв"},
    {id: 5, name: "Григорий Златовласов"},
  ],
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addText: (state, action) => {
      state.text = action.payload;
    },
    addUser: (state, action) => {
      let user = {};
      user.id = state.list.length + 1;
      user.name = action.payload;
      state.list.push(user);
    }
  }
})

export const usersReducer = usersSlice.reducer;
export const {addText, addUser} = usersSlice.actions;