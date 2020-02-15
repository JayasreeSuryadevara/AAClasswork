

function addTodo(event) {
  event.preventDefault();
  const todos = []
  const todoText = document.querySelector("[name=add-todo]").value;
  const todo = {
    text: todoText,
    done: false
  };

  todos.push(todo);
  document.querySelector("[name=add-todo]").value = "";
  populateList(todos);
}

function populateList(todos) {

}

document.querySelector(".add-todo-form").addEventListener("submit", addTodo);