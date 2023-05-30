
import React from "react";

function Task({ category, text, handleDeleteTask }) {
  const handleDelete = () => {
    const deletedTask = { text, category };
    handleDeleteTask(deletedTask);
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDelete} className="delete">
        X
      </button>
    </div>
  );
}

export default Task;














// import React from "react";

// function Task({category, text}) {
//   return (
//     <div className="task">
//       <div className="label">{category}</div>
//       <div className="text">{text}</div>
//       <button className="delete">X</button>
//     </div>
//   );
// }

// export default Task;





// import React from "react";

// function Task() {
//   return (
//     <div className="task">
//       <div className="label">CATEGORY HERE</div>
//       <div className="text">TEXT HERE</div>
//       <button className="delete">X</button>
//     </div>
//   );
// }

// export default Task;

