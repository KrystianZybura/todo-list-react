import { useDispatch, useSelector } from "react-redux";
import { Container, Button } from "./styled";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    tasks.length > 0 && (
      <Container>
        <Button
          onClick={() => dispatch(toggleHideDone())}
          disabled={tasks.every(({ done }) => !done)}
        >
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          onClick={() => dispatch(setAllDone())}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </Button>
      </Container>
    )
  );
};

export default Buttons;
