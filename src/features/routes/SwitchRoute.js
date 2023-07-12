import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

import AuthorPage from "../author/AuthorPage";
import TaskPage from "../tasks/TaskPage";
import TasksPage from "../tasks/TasksPage";

const SwitchRoute = () => (
  <Switch>
    <Route path="/autor">
      <AuthorPage />
    </Route>
    <Route path="/zadania/:id">
      <TaskPage />
    </Route>
    <Route path="/">
      <Redirect to="/zadania" />
      <TasksPage />
    </Route>
  </Switch>
);

export default SwitchRoute;
