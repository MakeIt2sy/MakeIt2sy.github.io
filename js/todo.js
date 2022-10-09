/* toDo 입력한 걸 저장, 페인트, 삭제
*/

const toDoForm = document.getElementById("todoForm");
const toDoInput = document.querySelector("#todoForm input");
const toDoList = document.getElementById("todoList");
const TODOS_KEY = "todos";
let toDos = [];

//1. 입력하고  서브밋 해서 저장
//2. 화면에 표시
//3. 로컬 스토리지에 저장
//4. 버튼 누르면 삭제

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
     //JSON.stringify: JavaScript 값이나 객체를 JSON 문자열로 변환
  }
  
  function deleteToDo(event) {
    const li = event.target.parentElement;
       // 방금 그 이벤트의 타깃이 된 요소의 부모 요소
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
      //html에서도 없애고 filter 함수를 통해 toDos 배열에서도 없앰
    saveToDos();
  }
  
  function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "✔️";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
  }
  function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
      text: newTodo,
      id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
  }
  toDoForm.addEventListener("submit", handleToDoSubmit);
  const savedToDos = localStorage.getItem(TODOS_KEY);
  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
  }