import { useDispatch, useSelector } from "react-redux";
import { Container, Button } from "./styled";
import { selectTasks, toggleHideDone } from "../tasksSlice";

const Buttons = ({ setAllDone }) => {
  const dispatch = useDispatch();
  const { tasks, hideDone } = useSelector(selectTasks);

  return (
    tasks.length > 0 && (
      <Container>
        <Button
          onClick={() => dispatch(toggleHideDone())}
          disabled={tasks.every(({ done }) => !done)}
        >
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button onClick={setAllDone} disabled={tasks.every(({ done }) => done)}>
          Ukończ wszystkie
        </Button>
      </Container>
    )
  );
};

export default Buttons;
