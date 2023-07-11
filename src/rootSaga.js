import { all } from "redux-saga/effects";

import { tasksSaga } from "./features/tasks/tasksSaga";

function* rootSaga() {
  yield all([tasksSaga()]);
}

export default rootSaga;
