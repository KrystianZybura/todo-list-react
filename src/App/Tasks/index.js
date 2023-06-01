import { List, Item, Content, Button } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <Item hidden={hideDone} done={task.done} key={task.id}>
        <Button
          done
          checked={task.done}
          onClick={() => toggleTaskDone(task.id)}
        >
          &#x2713;
        </Button>
        <Content done={task.done}>{task.content}</Content>
        <Button onClick={() => removeTask(task.id)}>🗑</Button>
      </Item>
    ))}
  </List>
);

export default Tasks;
