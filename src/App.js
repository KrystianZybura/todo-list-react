import {
  HashRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import TasksPage from "./features/tasks/TasksPage";
import AuthorPage from "./features/author";
import TaskPage from "./features/tasks/TaskPage";
import { Navigation, StyledNavLink, UnorderedList } from "./styled";
import Container from "./common/Container";

const App = () => (
  <HashRouter>
    <Navigation>
      <Container>
        <UnorderedList>
          <li>
            <StyledNavLink to="/zadania">Zadania</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/autor">O autorze</StyledNavLink>
          </li>
        </UnorderedList>
      </Container>
    </Navigation>

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
