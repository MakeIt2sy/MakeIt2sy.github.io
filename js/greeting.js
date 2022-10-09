const loginForm = document.querySelector("#loginForm"); 
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todoForm"); 

const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY = "username";
//로그인 폼, 로그인 인풋, 그리팅 요소, hidden 클래스 이름, 유저네임 키


/*폼을 서브밋 했을 때 
 1. 새로고침을 막고
 2. 이름이 로컬스토리지에 저장되고 
 3. 로그인 폼은 사라지고 (class="hidden") greeting문구는 나타나야
*/

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME); //폼 없어짐
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);//로컬스토리지 이름 저장
    paintGreetings(username);//greeting 문구 표시
}

function paintGreetings(username){
    const time = new Date().getHours();

    if(time<= parseInt(12)){
        greeting.innerText = `Good Morning, ${username}`;
        console.log(time);
    }else if(time<=parseInt(18)){
        greeting.innerText = `Good Afternoon, ${username}`;
        console.log(time);
    }else{
        greeting.innerText = `Good Evening, ${username}`;
        console.log(time);
    }

    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME); //이너텍스트 바꾸고 히든 클래스 없앰
}

loginForm.addEventListener("submit",onLoginSubmit);
/*새로고침을 하면 localstorage에 이름 저장은 되어 있으나 
  다시 인풋을 받으려고 돌아가는 것을 막자
*/ 
const savedUsername = localStorage.getItem(USERNAME_KEY);
//로컬 스토리지에 있는 유저 네임 받아 옴
console.log(savedUsername);

if(savedUsername !== null ){
    paintGreetings(savedUsername);
} else {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}
// 저장된 게 없으면 입력 받아서 서브밋 진행하고 있으면 로컬 스토리지에 있는 이름으로 페인트
// 아, 이래서 함수는 기능을 하나하나 다 쪼개는군! 




