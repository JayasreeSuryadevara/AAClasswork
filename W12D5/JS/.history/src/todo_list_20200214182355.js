function addTodo(event) {
  event.preventDefault();
  const todos = JSON.parse(localStorage.getItem("todos")) || []
  debugger
  const todoText = document.querySelector("[name=add-todo]").value;
  const todo = {
    text: todoText,
    done: false
  };

  todos.push(todo);
  document.querySelector("[name=add-todo]").value = "";

  populateList(todos);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function populateList(todos) {
  const todoUl = document.createElement("ul");

  todos.forEach((todo) => {
    const todoLi = document.createElement("li");
    const todoLabel = document.createElement("label");
    const todoCheckbox = document.createElement("input");

    todoCheckbox.type = "checkbox";
    todoCheckbox.checked = todo.done;
    todoLabel.text = todo.text;

    todoLi.appendChild(todoCheckbox);
    todoLi.appendChild(todoLabel);
    todoUl.appendChild(todoLi);
  });
}

document.querySelector(".add-todo-form").addEventListener("submit", addTodo);