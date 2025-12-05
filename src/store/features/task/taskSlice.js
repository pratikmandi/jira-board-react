import { createSlice } from "@reduxjs/toolkit";

const savedData = JSON.parse(localStorage.getItem("tasks")) || {
  todo: [],
  progress: [],
  review: [],
  done: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: savedData,
  reducers: {
    addTask(state, action) {
      const { column, task } = action.payload;
      state[column].push(task);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    moveTask(state, action) {
      const { from, to, index } = action.payload;
      const task = state[from].splice(index, 1)[0];
      state[to].push(task);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
  },
});

export const { addTask, moveTask } = tasksSlice.actions;
export default tasksSlice.reducer;
