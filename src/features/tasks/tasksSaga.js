import { call, debounce, put, select, takeEvery } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { setTasks, fetchExampleTasks } from "./tasksSlice";
import { selectTasks } from "./tasksSlice";
import { setLocalStorage } from "./tasksInLocalStorage";

function* fetchExampleTaskHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);

    yield put(setTasks(exampleTasks));
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
  yield debounce(500, fetchExampleTasks.type, fetchExampleTaskHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}

export { tasksSaga };
