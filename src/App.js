import {
  HashRouter,
  Route,
  Switch,
  Link,
} from "react-router-dom/cjs/react-router-dom.min";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author";
import Task from "./features/tasks/TaskPage";

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
        <Author />
      </Route>
      <Route path="/zadania/:id">
        <Task />
      </Route>
      <Route path="/zadania">
        <Tasks />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
