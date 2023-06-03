import { List, Item, Content, Button, ToggleDoneButton } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <Item hidden={task.done && hideDone} done={task.done} key={task.id}>
        <ToggleDoneButton onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✓" : ""}
        </ToggleDoneButton>
        <Content done={task.done}>{task.content}</Content>
        <Button onClick={() => removeTask(task.id)}>🗑</Button>
      </Item>
    ))}
  </List>
);

export default Tasks;
