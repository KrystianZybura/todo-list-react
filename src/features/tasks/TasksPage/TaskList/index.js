import { useDispatch, useSelector } from "react-redux";
import {
  List,
  Item,
  Content,
  Button,
  ToggleDoneButton,
  StyledLink,
} from "./styled";
import {
  selectHideDone,
  toggleTaskDone,
  removeTask,
  selectTasksByQuery,
} from "../../tasksSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  return (
    <List>
      {tasks.map((task) => (
        <Item hidden={task.done && hideDone} done={task.done} key={task.id}>
          <ToggleDoneButton onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : ""}
          </ToggleDoneButton>
          <Content done={task.done}>
            <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
          </Content>
          <Button onClick={() => dispatch(removeTask(task.id))}>🗑</Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
