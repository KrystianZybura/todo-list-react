import { call, debounce, put, select, takeEvery } from "redux-saga/effects";

import { getExampleTasks } from "./getExampleTasks";
import { setLocalStorage } from "./tasksInLocalStorage";
import {
  fetchExampleTasks,
  selectTasks,
  setIsFetchingExampleTasks,
  setTasks,
} from "./tasksSlice";

function* fetchExampleTaskHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);

    yield put(setTasks(exampleTasks));
    yield put(setIsFetchingExampleTasks());
  } catch (error) {
    console.error(error);

    yield call(alert, "Coś poszło nie tak..");
    yield put(setIsFetchingExampleTasks());
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
