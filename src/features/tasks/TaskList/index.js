import { useDispatch, useSelector } from "react-redux";
import { List, Item, Content, Button, ToggleDoneButton } from "./styled";
import { selectTasks, toggleTaskDone } from "../tasksSlice";

const TaskList = ({ tasks, removeTask }) => {
  const dispatch = useDispatch();
  const { hideDone } = useSelector(selectTasks);

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
          <Button onClick={() => removeTask(task.id)}>🗑</Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
