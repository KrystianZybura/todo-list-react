import {
  BrowserRouter,
  Route,
  Switch,
  Link,
} from "react-router-dom/cjs/react-router-dom.min";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author";

const App = () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/todo-list-react">Strona główna</Link>
        </li>
        <li>
          <Link to="/author">O autorze</Link>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/author">
        <Author />
      </Route>
      <Route path="/todo-list-react">
        <Tasks />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
