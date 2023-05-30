import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";

function NewTaskForm({categories, handleAddNewTask}) {

  const [details, setDetails] = useState("")
  const [category, setCategory] = useState("")

const handleSubmit = (e) => {
  e.preventDefault()
  let newTask = {text:details, category:category}
  handleAddNewTask(newTask)
}




  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={e => setDetails(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
          {categories.map(category => (
            <option key={uuidv4()} >{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;






// import React from "react";

// function NewTaskForm() {
//   return (
//     <form className="new-task-form">
//       <label>
//         Details
//         <input type="text" name="text" />
//       </label>
//       <label>
//         Category
//         <select name="category">
//           {/* render <option> elements for each category here */}
//         </select>
//       </label>
//       <input type="submit" value="Add task" />
//     </form>
//   );
// }

// export default NewTaskForm;

