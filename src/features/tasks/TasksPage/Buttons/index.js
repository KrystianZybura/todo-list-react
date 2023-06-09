import { useDispatch, useSelector } from "react-redux";

import {
  fetchExampleTasks,
  selectAreTasksEmpty,
  selectHideDone,
  selectIsAnyTaskDone,
  selectIsEveryTaskDone,
  selectIsFetchingExampleTasks,
  setAllDone,
  setIsFetchingExampleTasks,
  toggleHideDone,
} from "../../tasksSlice";
import { Button, Wrapper } from "./styled";

const Buttons = ({ component }) => {
  const dispatch = useDispatch();

  const isAnyTaskDone = useSelector(selectIsAnyTaskDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);

  const hideDone = useSelector(selectHideDone);
  const isLoading = useSelector(selectIsFetchingExampleTasks);

  const fetchExampleTasksHandler = () => {
    dispatch(fetchExampleTasks());
    dispatch(setIsFetchingExampleTasks());
  };

  return (
    !areTasksEmpty && (
      <Wrapper>
        {component === "Form" ? (
          <Button disabled={isLoading} onClick={fetchExampleTasksHandler}>
            {isLoading ? "Ładowanie.." : "Pobierz przykładowe zadania"}
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
      </Wrapper>
    )
  );
};

export default Buttons;
