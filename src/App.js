import {
  HashRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import TasksPage from "./features/tasks/TasksPage";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import { Navigation, StyledNavlink, UnorderedList } from "./styled";
import Container from "./common/Container";

const App = () => (
  <HashRouter>
    <Navigation>
      <Container>
        <UnorderedList>
          <li>
            <StyledNavlink to="/zadania">Strona główna</StyledNavlink>
          </li>
          <li>
            <StyledNavlink to="/autor">O autorze</StyledNavlink>
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
