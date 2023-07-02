import axios from "axios";

const getExampleTasks = async () => {
  try {
    const response = await axios.get("/todo-list-react/exampleTasks.json");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getExampleTasks };
