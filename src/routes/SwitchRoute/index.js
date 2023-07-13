import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

import AuthorPage from "../../features/author/AuthorPage";
import TaskPage from "../../features/tasks/TaskPage";
import TasksPage from "../../features/tasks/TasksPage";
import { AUTHOR_PAGE, DEFAULT_ROUTE, TASK_PAGE } from "../routePaths";

const SwitchRoute = () => (
  <Switch>
    <Route path={AUTHOR_PAGE}>
      <AuthorPage />
    </Route>
    <Route path={TASK_PAGE}>
      <TaskPage />
    </Route>
    <Route>
      <Redirect to={DEFAULT_ROUTE} />
      <TasksPage />
    </Route>
  </Switch>
);

export default SwitchRoute;
