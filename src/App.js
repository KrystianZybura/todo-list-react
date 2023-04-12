import Form from "./Form";
import Header from "./Header";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Main from "./Main";
import { useState } from "react";

let tasks = [
  { id: 1, content: "Umyć samochód", done: true },
  { id: 2, content: "Zaparzyć herbatę", done: true },
]

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
    <Main>
      <Header title={"Lista zadań"} />
      <Section
        title={"Dodaj nowe zadanie"}
        body={<Form />}
      />
      <Section
        body={
          <List
            tasks={tasks}
            hideDone={hideDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />
        }
        title={
          "Lista zadań"
        }
      />
    </Main>
  );

}

export default App;
