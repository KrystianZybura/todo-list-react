import { useDispatch, useSelector } from "react-redux";
import { Container, Button } from "./styled";
import {
  toggleHideDone,
  setAllDone,
  selectHideDone,
  selectIsEveryTaskDone,
  selectAreTasksEmpty,
  selectIsAnyTaskDone,
  fetchExampleTasks,
} from "../tasksSlice";

const Buttons = () => {
  const dispatch = useDispatch();

  const hideDone = useSelector(selectHideDone);

  const isAnyTaskDone = useSelector(selectIsAnyTaskDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);

  return (
    !areTasksEmpty && (
      <Container>
        <Button onClick={() => dispatch(fetchExampleTasks())}>
          Pobierz przykładowe zadania
        </Button>
        <Button
          disabled={!isAnyTaskDone}
          onClick={() => dispatch(toggleHideDone())}
        >
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          onClick={() => dispatch(setAllDone())}
          disabled={isEveryTaskDone}
        >
          Ukończ wszystkie
        </Button>
      </Container>
    )
  );
};

export default Buttons;
