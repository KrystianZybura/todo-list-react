import Form from "./Form";
import Header from "../../../common/Header";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Container from "../../../common/Container";
import TaskSearch from "./TaskSearch";

function TasksPage() {
  return (
    <Container>
      <Header title={"Lista zadań"} />
      <Section title={"Dodaj nowe zadanie"} body={<Form />} />
      <Section title={"Wyszukiwarka"} body={<TaskSearch />} />
      <Section
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
        title={"Lista zadań"}
      />
    </Container>
  );
}

export default TasksPage;
