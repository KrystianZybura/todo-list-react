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
      <Header title={"Lista zadań"} />{" "}
      <Section
        body={<Form />}
        extraHeaderContent={<Buttons component={"Form"} />}
        title={"Dodaj nowe zadanie"}
      />
      <Section title={"Wyszukiwarka"} body={<TaskSearch />} />
      <Section
        body={<TaskList />}
        extraHeaderContent={<Buttons component={"TaskList"} />}
        title={"Lista zadań"}
      />
    </Container>
  );
}

export default TasksPage;
