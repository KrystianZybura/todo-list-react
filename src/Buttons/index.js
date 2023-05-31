import { Container, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) =>
  tasks.length > 0 && (
    <Container>
      <Button
        onClick={toggleHideDone}
        disabled={tasks.every(({ done }) => !done)}
      >
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </Button>
      <Button disabled={tasks.every(({ done }) => done)} onClick={setAllDone}>
        Ukończ wszystkie
      </Button>
    </Container>
  );

export default Buttons;
