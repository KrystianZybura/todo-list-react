import Form from "./Form";
import Header from "./Header";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Main from "./Main";
import { useState } from "react";
import { useTasks } from "./useTasks";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const { tasks, removeTask, toggleTaskDone, setAllDone, addNewTask } =
    useTasks();

  return (
    <Main>
      <Header title={"Lista zadań"} />
      <Section
        title={"Dodaj nowe zadanie"}
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
        title={"Lista zadań"}
      />
    </Main>
  );
}

export default App;
