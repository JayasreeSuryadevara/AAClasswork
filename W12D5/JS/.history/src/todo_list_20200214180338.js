const todos = []


function addTodo(event) {
  event.preventDefault();
  const todoText = document.querySelector("[name=add-todo]").value;
  const todo = {
    text: todoText,
    done: false
  };

  todos.push(todo);
  document.querySelector("[name=add-todo]").value = "";
}

document.querySelector(".add-todo-form").addEventListener("submit", addTodo);