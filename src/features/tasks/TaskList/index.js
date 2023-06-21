import { List, Item, Content, Button, ToggleDoneButton } from "./styled";
import { toggleTaskDone } from "../tasksSlice";
import { useDispatch } from "react-redux";

const TaskList = ({ tasks, hideDone, removeTask }) => {
  const dispatch = useDispatch();

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
