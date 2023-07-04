const localStorageKey = "tasks";

const setLocalStorage = (tasks) =>
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));

const getTasksFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey));

export { setLocalStorage, getTasksFromLocalStorage };
