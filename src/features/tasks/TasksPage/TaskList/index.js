import { useDispatch, useSelector } from "react-redux";

import { DEFAULT_ROUTE } from "../../../../routes/routePaths";
import Link from "../../Link";
import {
  removeTask,
  selectHideDone,
  selectTasksByQuery,
  toggleTaskDone,
} from "../../tasksSlice";
import { useQueryParameter } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";
import { Button, Content, Item, List, ToggleDoneButton } from "./styled";

const TaskList = () => {
  const dispatch = useDispatch();

  const query = useQueryParameter(searchQueryParamName);

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
            <Link url={`${DEFAULT_ROUTE}/${task.id}`} content={task.content} />
          </Content>
          <Button onClick={() => dispatch(removeTask(task.id))}>🗑</Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
