import Form from "../Form";
import Header from "../../../common/Header";
import TaskList from "../TaskList";
import Buttons from "../Buttons";
import Section from "../../../common/Section";
import Main from "../../../common/Main";

function Tasks() {
  return (
    <Main>
      <Header title={"Lista zadań"} />
      <Section title={"Dodaj nowe zadanie"} body={<Form />} />
      <Section
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
        title={"Lista zadań"}
      />
    </Main>
  );
}

export default Tasks;
