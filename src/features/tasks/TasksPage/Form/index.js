import { nanoid } from "@reduxjs/toolkit";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import Input from "../../Input";
import { addTask } from "../../tasksSlice";
import { Button, StyledForm } from "./styled";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef();

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContentTrimmed = newTaskContent.trim();

    if (!newTaskContentTrimmed) {
      return;
    }

    dispatch(
      addTask({
        content: newTaskContentTrimmed,
        done: false,
        id: nanoid(),
      })
    );

    setNewTaskContent("");
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        autoFocus
        ref={inputRef}
        placeholder="Co jest do zrobienia?"
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button onClick={() => inputRef.current.focus()} value="Dodaj zadanie">
        Dodaj zadanie
      </Button>
    </StyledForm>
  );
};

export default Form;
