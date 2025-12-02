import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: '',
  todoList: [
    {id: Date.now(), text: "Первое дело", completed: false}
  ] 
};

const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addNewText: (state, action) => {
    state.text = action.payload;
    },
    addTask: (state, action) => {
      let newItem = {id: Date.now(), text: action.payload, completed: false}
      state.todoList.push(newItem);
      state.text = "";
    },
    toggleCompleted: (state, action) => {
      state.todoList = state.todoList.map(elem => {
        if (elem.id !== action.payload) {
          return elem;
        }
        return {
          ...elem,
          completed: !elem.completed
        }
      })
    },
    // toggleCompleted: (state, action) => {//вариант с find, предложенный нейронкой
    //   const taskId = action.payload;
    //   // Находим задачу по ID и переключаем ее completed статус
    //   const task = state.todoList.find(elem => elem.id === taskId);
    //   if (task) {
    //     task.completed = !task.completed;
    //   }
      
    //   // Или альтернативный вариант с map():
    //   // state.todoList = state.todoList.map(elem => {
    //   //   if (elem.id === action.payload) {
    //   //     return { ...elem, completed: !elem.completed };
    //   //   }
    //   //   return elem;
    //   // });
    // },

    deleteTask: (state, action) => {
      state.todoList = state.todoList.filter(item => item.id !== action.payload);
    }
  }
})

export const todoReducer = todoSlice.reducer;
export const { addNewText, addTask, toggleCompleted, deleteTask } = todoSlice.actions;