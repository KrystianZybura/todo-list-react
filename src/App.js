import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

import Navigation from "./common/Navigation";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";

const App = () => (
  <HashRouter>
    <Navigation />
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
  </HashRouter>
);

export default App;
