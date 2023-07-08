import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksInLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage() ?? [],
    hideDone: false,
    fetchingStatus: undefined,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },

    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },

    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);

      tasks[index].done = !tasks[index].done;
    },

    setAllDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
      }
    },

    removeTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);

      tasks.splice(index, 1);
    },

    fetchExampleTasks: () => {},

    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
    },

    setFetchingStatus: (state, { payload: status }) => {
      state.fetchingStatus = status;
    },
  },
});

const selectTasksState = (state) => state.tasks;

export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = (state) => selectTasks(state).lenght === 0;

export const selectFetchingStatus = (state) =>
  selectTasksState(state).fetchingStatus;

export const selectIsAnyTaskDone = (state) =>
  selectTasks(state).some(({ done }) => done);

export const selectIsEveryTaskDone = (state) =>
  selectTasks(state).every(({ done }) => done);

export const getTaskById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state);

  if (!query || query.trim() === "") {
    return tasks;
  }

  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export const {
  addTask,
  toggleTaskDone,
  toggleHideDone,
  removeTask,
  setAllDone,
  fetchExampleTasks,
  setTasks,
  setFetchingStatus,
} = tasksSlice.actions;

export default tasksSlice.reducer;
