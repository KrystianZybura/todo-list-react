import { call, debounce, put, select, takeEvery } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import {
  setTasks,
  fetchExampleTasks,
  setIsFetchingExampleTasks,
} from "./tasksSlice";
import { selectTasks } from "./tasksSlice";
import { setLocalStorage } from "./tasksInLocalStorage";

function* fetchExampleTaskHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);

    yield put(setTasks(exampleTasks)) && put(setIsFetchingExampleTasks());
  } catch (error) {
    console.error(error);

    yield call(alert, "Coś poszło nie tak..");
  }
}

function* saveTasksInLocalStorageHandler() {
  try {
    const tasks = yield select(selectTasks);

    yield call(setLocalStorage, tasks);
  } catch (error) {
    console.error(error);
  }
}

function* tasksSaga() {
  yield debounce(1000, fetchExampleTasks.type, fetchExampleTaskHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}

export { tasksSaga };
