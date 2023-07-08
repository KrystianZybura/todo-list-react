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
  selectIsFetchingExampleTasks,
  setIsFetchingExampleTasks,
} from "../../tasksSlice";

const Buttons = ({ component }) => {
  const dispatch = useDispatch();

  const isAnyTaskDone = useSelector(selectIsAnyTaskDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);

  const hideDone = useSelector(selectHideDone);
  const loading = useSelector(selectIsFetchingExampleTasks);

  const fetchExampleTasksHandler = () => {
    dispatch(fetchExampleTasks());
    dispatch(setIsFetchingExampleTasks());
  };

  return (
    !areTasksEmpty && (
      <Container>
        {component === "Form" ? (
          <Button disabled={loading} onClick={fetchExampleTasksHandler}>
            {loading ? "Ładowanie.." : "Pobierz przykładowe zadania"}
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
