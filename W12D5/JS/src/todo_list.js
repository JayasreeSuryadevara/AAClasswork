function addTodo(event) {
  event.preventDefault();
  // debugger
  const todos = JSON.parse(localStorage.getItem("todos")) || []
  const todoText = document.querySelector("[name=add-todo]").value;
  const todo = {
    id: todos.length + 1,
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

  const todo = todos.filter((el) => el.id === parseInt(event.target.dataset.id))[0]
  
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
  const ul = Array.from(form.children).filter(el => el.nodeName === "UL")
  if (ul.length === 1) form.removeChild(ul[0]);
  form.appendChild(todoUl);
}



document.querySelector(".add-todo-form").addEventListener("submit", addTodo);
populateList(JSON.parse(localStorage.getItem("todos")));