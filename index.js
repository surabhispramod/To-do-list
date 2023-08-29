submit.addEventListener("click", (e) => {
  e.preventDefault();
  let titlec = title.value;
  let descc = desc.value;

  // Get existing todo items from local storage
  let existingTodos = JSON.parse(localStorage.getItem("todos")) || [];

  // Add the new todo item to the array
  existingTodos.push({ title: titlec, description: descc });

  // Save the updated array back to local storage
  localStorage.setItem("todos", JSON.stringify(existingTodos));

  // Clear the input fields
  title.value = "";
  desc.value = "";

  // Update the display of todos
  displayTodos();
});

deletebtn.addEventListener("click", (e) => {
  e.preventDefault();
  // Remove todos from local storage
  localStorage.removeItem("todos");
  // Clear the display
  todo.innerHTML = "";
});

function displayTodos() {
  let existingTodos = JSON.parse(localStorage.getItem("todos")) || [];

  // Clear the current display
  todo.innerHTML = "";

  // Loop through the todos and create the HTML for each
  existingTodos.forEach((todoItem) => {
    todo.innerHTML += ` <br>
        <div class="card w-50">
          <div class="card-body">
            <h5 class="card-title">${todoItem.title}</h5>
            <p class="card-text">${todoItem.description}</p>
            <input type="checkbox" aria-label="Checkbox for following text input">
          </div>
        </div>
      `;
  });
}

// Initial display when the page loads
displayTodos();
