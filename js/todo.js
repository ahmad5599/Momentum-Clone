const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteTodo(event) {
  const toDeleteLi = event.target.parentElement;
  toDeleteLi.remove();
  toDos = toDos.filter((toDos) => toDos.id !== parseInt(toDeleteLi.id)); //<---this statement deleting toDos from the localStorage after refres
  saveTodos();
}
function emoji() {
  let emojis = [
    "🍇",
    "🍈",
    "🍉",
    "🍊",
    "🍋",
    "🍌",
    "🍍",
    "🥭",
    "🍎",
    "🍏",
    "🍐",
    "🍑",
    "🍒",
    "🍓",
    "🥝",
    "🍅",
    "🥥",
    "🥑",
    "🍆",
    "🥔",
    "🥕",
    "🌽",
    "🌶",
    "🥒",
    "🥬",
    "🥦",
    "🍄",
    "🥜",
    "🌰",
    "🌱",
    "🌲",
    "🌳",
    "🌴",
    "🌵",
    "🌾",
    "🌿",
    "☘",
    "🍀",
    "🍁",
    "🍂",
    "🍃",
    "🐳",
    "🐋",
    "🐬",
    "🐟",
    "🐠",
    "🐡",
    "🦈",
    "🐙",
    "🐚",
    "🐊",
    "🐢",
    "🐍",
    "🐲",
    "🐉",
    "🦕",
    "🦖",
    "💐",
    "🌸",
    "💮",
    "🏵",
    "🌹",
    "🥀",
    "🌺",
    "🌻",
    "🌼",
    "🌷",
  ];
  return emojis[Math.floor(Math.random() * emojis.length)];
}
function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = emoji();
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodosObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodosObj);
  paintTodo(newTodosObj);
  saveTodos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; //<--- RESROTES old todos value
  parsedToDos.forEach(paintTodo); //<--caleed an arow function
}
