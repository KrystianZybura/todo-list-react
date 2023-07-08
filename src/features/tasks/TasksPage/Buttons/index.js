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
  selectFetchingStatus,
  setFetchingStatus,
} from "../../tasksSlice";

const Buttons = ({ component }) => {
  const dispatch = useDispatch();

  const hideDone = useSelector(selectHideDone);

  const isAnyTaskDone = useSelector(selectIsAnyTaskDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const status = useSelector(selectFetchingStatus);

  const onFetchExampleTasksSubmit = () => {
    dispatch(fetchExampleTasks());
    dispatch(setFetchingStatus("loading"));
  };

  return (
    !areTasksEmpty && (
      <Container>
        {component === "Form" ? (
          <Button
            disabled={status === "loading"}
            onClick={onFetchExampleTasksSubmit}
          >
            {status === "loading"
              ? "Ładowanie.."
              : "Pobierz przykładowe zadania"}
          </Button>
        ) : (
          <>
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
          </>
        )}
      </Container>
    )
  );
};

export default Buttons;
