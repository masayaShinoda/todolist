//selectors
var todoList = document.querySelector(".todo-list");
var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");

//func

//main function
todoButton.addEventListener("click", function addTodo(event) {
  event.preventDefault();

  //check if input has value
  if (todoInput.value !== " ") {
    //checkbox
    var checkbox = document.createElement("button");
    checkbox.classList.add("check-button");
    checkbox.id = "checkBtn";
    checkbox.innerHTML = '<i class="fas fa-check"></i>';
    //trash
    var trash = document.createElement("button");
    trash.classList.add("delete-button");
    trash.id = "trashBtn";
    trash.innerHTML = '<i class="fas fa-trash"></i>';

    var todo = document.createElement("div");
    todo.classList.add("todo");
    todoList.appendChild(todo);
    var inputValue = todoInput.value;
    var newItem = document.createElement("li");
    newItem.innerText = inputValue;
    todo.appendChild(checkbox);
    todo.appendChild(newItem);
    todo.appendChild(trash);

    //delete input value after button pressed
    todoInput.value = " ";

    // Save the list to localStorage
    localStorage.setItem("todoList", todoList.innerHTML);
  }
  //checkbox function
  checkbox.addEventListener("click", function () {
    this.parentElement.classList.toggle("checked");
    // Save the list to localStorage
    localStorage.setItem("todoList", todoList.innerHTML);
  });

  //trash function
  trash.addEventListener("click", function () {
    this.parentElement.remove();
    // Save the list to localStorage
    localStorage.setItem("todoList", todoList.innerHTML);
  });
});

//check for saved todo list
function loadState() {
  var saved = localStorage.getItem("todoList");
  console.log(saved);
  //if there are any saved itemms, update list
  if (saved) {
    todoList.innerHTML = saved;
  }
}

loadState();
