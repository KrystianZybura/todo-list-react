import { useTasks } from "./useTasks";
import { useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice";
import Form from "../Form";
import Header from "../../../common/Header";
import TaskList from "../TaskList";
import Buttons from "../Buttons";
import Section from "../../../common/Section";
import Main from "../../../common/Main";

function Tasks() {
  const { tasks } = useSelector(selectTasks);

  const { removeTask, setAllDone } = useTasks();

  return (
    <Main>
      <Header title={"Lista zadań"} />
      <Section title={"Dodaj nowe zadanie"} body={<Form />} />
      <Section
        body={<TaskList tasks={tasks} removeTask={removeTask} />}
        extraHeaderContent={<Buttons tasks={tasks} setAllDone={setAllDone} />}
        title={"Lista zadań"}
      />
    </Main>
  );
}

export default Tasks;
