const getExampleTasks = async () => {
  try {
    const response = await fetch("/todo-list-react/exampleTasks.json");

    if (!response.ok) {
      new Error(response.statusText);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export { getExampleTasks };
