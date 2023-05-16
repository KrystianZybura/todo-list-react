import "./style.css";
import { useState } from "react";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContentTrimmed = newTaskContent.trim();

    if (!newTaskContentTrimmed) {
      return;
    }

    addNewTask(newTaskContentTrimmed);
    setNewTaskContent("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        className="form__inputText"
        placeholder="Co jest do zrobienia?"
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <input className="form__button" type="submit" value="Dodaj zadanie" />
    </form>
  );
};

export default Form;
