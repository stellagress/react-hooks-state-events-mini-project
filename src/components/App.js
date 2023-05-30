import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);

  const handleDeleteTask = (deletedTask) => {
    const filteredTasks = tasks.filter((task) => deletedTask.text !== task.text);
    setTasks(filteredTasks);
  };

  const handleAddNewTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} />
      <NewTaskForm categories={categories} handleAddNewTask={handleAddNewTask} />
      <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;



// import React from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";

// import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

// function App() {
//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter />
//       <NewTaskForm />
//       <TaskList TASKS={TASKS} category={TASKS.category}/>
//     </div>
//   );
// }

// export default App;