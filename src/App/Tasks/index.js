import { List, Item, Content, Button, DoneButton } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <Item hidden={task.done && hideDone} done={task.done} key={task.id}>
        <DoneButton done onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✓" : ""}
        </DoneButton>
        <Content done={task.done}>{task.content}</Content>
        <Button onClick={() => removeTask(task.id)}>🗑</Button>
      </Item>
    ))}
  </List>
);

export default Tasks;
