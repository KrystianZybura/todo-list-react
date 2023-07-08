import axios from "axios";

const getExampleTasks = async () => {
  const response = await axios.get("/todo-list-react/exampleTasks.json");

  return response.data;
};

export { getExampleTasks };
