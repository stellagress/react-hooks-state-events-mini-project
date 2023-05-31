import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const handleSelection = (category) => {
    onSelectCategory(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          onClick={() => handleSelection(category)}
          key={category}
          className={selectedCategory === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;






// Pass the list of categories to this component from App. Then, update this component to display <button> elements for each category. In order to pass the test, the buttons will need 
//a key prop equal to the category.

// When a button is clicked, the following should happen:

// Whichever button was clicked should have a class of selected. The other buttons should not have any class assigned.
// The list of tasks being displayed should be filtered, so that only tasks that match the category that was clicked are displayed.
// If the button for "All" is selected, all the tasks should be displayed.





// import React, { useState } from "react";

// function CategoryFilter({ categories}) {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   function handleSelection(event) {
//     setSelectedCategory(event.target.value);
//   }



//   const filteredSelection =
//     selectedCategory === "All"
//       ? categories
//       : categories.filter((category) => category === selectedCategory);

//   return (
//     <div className="categories">
//       <h5>Category filters</h5>
//       {/* render <button> elements for each category here */}
//       {categories.map((category) => (
//         <button
//           onClick={handleSelection}
//           key={category}
//           className={selectedCategory === category ? "selected" : ""}
//           value={category}
//         >
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default CategoryFilter;









// import React from "react";

// function CategoryFilter() {
//   return (
//     <div className="categories">
//       <h5>Category filters</h5>
//       {/* render <button> elements for each category here */}
//     </div>
//   );
// }

// export default CategoryFilter;