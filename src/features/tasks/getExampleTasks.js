import axios from "axios";

const EXAMPLE_TASKS_JSON = "/todo-list-react/exampleTasks.json";

const getExampleTasks = async () => {
  const response = await axios.get(EXAMPLE_TASKS_JSON);

  return await response.data;
};

export { getExampleTasks };
