
import React from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task";

function TaskList({ tasks, handleDeleteTask }) {
  const mapTaskList = tasks.map((task) => (
    <Task
      key={uuidv4()}
      text={task.text}
      category={task.category}
      handleDeleteTask={handleDeleteTask}
    />
  ));

  return <div className="tasks">{mapTaskList}</div>;
}

export default TaskList;












// import React from "react";
// import { v4 as uuidv4 } from "uuid";
// import Task from "./Task";

// function TaskList({ tasks, handleDeleteTask }) {
//   const mapTaskList = tasks.map((task) => (
//     <Task
//       key={uuidv4()}
//       text={task.text}
//       category={task.category}
//       handleDeleteTask={handleDeleteTask}
//     />
//   ));

//   return <div className="tasks">{mapTaskList}</div>;
// }

// export default TaskList;








// import React from "react";
// import Task from "./Task";

// function TaskList() {
//   return (
//     <div className="tasks">
//       {/* display a list of tasks using Task component */}
      
      
//     </div>
//   );
// }

// export default TaskList;
