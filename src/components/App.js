import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDeleteTask = (deletedTask) => {
    const filteredTasks = tasks.filter((task) => deletedTask.text !== task.text);
    setTasks(filteredTasks);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={filteredTasks} handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;












// import React, { useState } from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";
// import { CATEGORIES, TASKS } from "../data";

// function App() {
//   const [tasks, setTasks] = useState(TASKS);
//   const [categories, setCategories] = useState(CATEGORIES);

//   const handleDeleteTask = (deletedTask) => {
//     const filteredTasks = tasks.filter((task) => deletedTask.text !== task.text);
//     setTasks(filteredTasks);
//   };

//   function onTaskFormSubmit (newTask) {
//     setTasks([...tasks, newTask]);
//   };

//   const handleSelectCategory = (category) => {
//     setCategories(category);
//   };

//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter categories={categories} 
//       handleSelectCategory ={handleSelectCategory }
//       />
//       <NewTaskForm categories={categories} onTaskFormSubmit={onTaskFormSubmit} />
//       <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} />
//     </div>
//   );
// }

// export default App;










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