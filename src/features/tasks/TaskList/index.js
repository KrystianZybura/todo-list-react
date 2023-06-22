import { useDispatch, useSelector } from "react-redux";
import { List, Item, Content, Button, ToggleDoneButton } from "./styled";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, hideDone } = useSelector(selectTasks);

  return (
    <List>
      {tasks.map((task) => (
        <Item hidden={task.done && hideDone} done={task.done} key={task.id}>
          <ToggleDoneButton
            onClick={() => dispatch(toggleTaskDone({ id: task.id }))}
          >
            {task.done ? "✓" : ""}
          </ToggleDoneButton>
          <Content done={task.done}>{task.content}</Content>
          <Button
            onClick={() => dispatch(removeTask({ id: task.id, content: task }))}
          >
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
