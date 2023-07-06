import {
  HashRouter,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import TasksPage from "./features/tasks/TasksPage";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";

const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">Strona główna</Link>
        </li>
        <li>
          <Link to="/autor">O autorze</Link>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/autor">
        <AuthorPage />
      </Route>
      <Route path="/zadania/:id">
        <TaskPage />
      </Route>
      <Route path="/zadania">
        <TasksPage />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
