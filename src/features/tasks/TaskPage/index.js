import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Link from "../Link";
import { getTaskById } from "../tasksSlice";
import { DEFAULT_ROUTE } from "../../../routes/routePaths";


const TaskPage = () => {
  const { id } = useParams();

  const task = useSelector((state) => getTaskById(state, id));

  return (
    <Container>
      <Header title={"Szczegóły zadania"} />
      <Section
        title={task ? task.content : "Nie znaleziono zadania 😥"}
        extraHeaderContent={
          <Link
            url={DEFAULT_ROUTE}
            content={"Powrót do listy zadań"}
            specialLink
          />
        }
        body={
          task && (
            <>
              <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
            </>
          )
        }
      />
    </Container>
  );
};

export default TaskPage;
