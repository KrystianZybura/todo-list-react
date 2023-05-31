import { Form as FormTemporary, Input, Button } from "./styled";
import { useState, useRef } from "react";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef();

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
    <FormTemporary onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        placeholder="Co jest do zrobienia?"
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button onClick={() => inputRef.current.focus()} value="Dodaj zadanie">
        Dodaj Zadanie
      </Button>
    </FormTemporary>
  );
};

export default Form;
