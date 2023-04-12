import Form from "./Form";
import Header from "./Header";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Main from "./Main";
import { useState } from "react";


function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "Umyć samochód", done: false },
    { id: 2, content: "Zaparzyć herbatę", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map((task => task.id === id ? {...task, done: !task.done} : task )));
  };
  
  const setAllDone = ()  => {
    setTasks(tasks => tasks.map(task => ({...task, done: true})));
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
        title={
          "Lista zadań"
        }
      />
    </Main>
  );

}

export default App;
