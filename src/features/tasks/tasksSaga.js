import { call, put, takeEvery } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { setTasks, fetchExampleTasks } from "./tasksSlice";

function* fetchExampleTaskHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    console.error(error);
    yield call(alert, "Coś poszło nie tak..");
  }
}

export function* watchFetchExampleTasks() {
  yield takeEvery(fetchExampleTasks.type, fetchExampleTaskHandler);
}
