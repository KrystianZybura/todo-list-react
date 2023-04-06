import Form from "./Form";
import Header from "./Header";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Main from "./Main";

let tasks = [
  { id: 1, content: "Umyć samochód", done: false },
  { id: 2, content: "Zaparzyć herbatę", done: true },
];

let hideDone = false;

function App() {
  return (
    <Main>
      <Header title={"Lista zadań"} />
      <Section
        title={"Dodaj nowe zadanie"}
        body={<Form />}
      />
      <Section
        body={<List tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={<Buttons tasks={tasks} />}
        title={"Lista zadań"}
      />
    </Main>
  );

}

export default App;
