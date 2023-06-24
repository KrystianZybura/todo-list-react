import { useDispatch, useSelector } from "react-redux";
import { List, Item, Content, Button, ToggleDoneButton } from "./styled";
import {
  selectTasks,
  selectHideDone,
  toggleTaskDone,
  removeTask,
} from "../tasksSlice";

const TaskList = () => {
  const dispatch = useDispatch();

  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);

  return (
    <List>
      {tasks.map((task) => (
        <Item hidden={task.done && hideDone} done={task.done} key={task.id}>
          <ToggleDoneButton onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : ""}
          </ToggleDoneButton>
          <Content done={task.done}>{task.content}</Content>
          <Button onClick={() => dispatch(removeTask(task.id))}>🗑</Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
