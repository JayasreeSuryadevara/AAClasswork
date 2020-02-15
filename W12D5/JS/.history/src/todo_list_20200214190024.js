function addTodo(event) {
  event.preventDefault();
  const todos = JSON.parse(localStorage.getItem("todos")) || []
  const todoText = document.querySelector("[name=add-todo]").value;
  const todo = {
    id: todos.length,
    text: todoText,
    done: false
  };

  todos.push(todo);
  document.querySelector("[name=add-todo]").value = "";

  populateList(todos);
  localStorage.setItem("todos", JSON.stringify(todos));
}


function checkboxHandler(event) {
  const todos = JSON.parse(localStorage.getItem("todos"))

  const todo = todos.filter((el) => el.id === event.target.dataset.id)[0]
  todo.done = event.target.checked;

  localStorage.setItem("todos", JSON.stringify(todos));
}


function populateList(todos) {
  const todoUl = document.createElement("ul");

  todos.forEach((todo) => {
    const todoLi = document.createElement("li");
    const todoLabel = document.createElement("label");
    const todoCheckbox = document.createElement("input");

    todoCheckbox.dataset.id = todo.id;
    // todoCheckbox.id = todo.id;
    todoCheckbox.addEventListener("click", checkboxHandler);

    todoCheckbox.type = "checkbox";
    todoCheckbox.checked = todo.done;
    todoLabel.innerText = todo.text;

    todoLi.appendChild(todoLabel);
    todoLi.appendChild(todoCheckbox);
    todoUl.appendChild(todoLi);
  });

  const form = document.querySelector(".add-todo-form");
  form.appendChild(todoUl);
}



document.querySelector(".add-todo-form").addEventListener("submit", addTodo);
populateList(JSON.parse(localStorage.getItem("todos")));