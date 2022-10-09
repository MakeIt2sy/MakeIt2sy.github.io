/* 1. 클락 디브 요소 정의하고
   2. date함수로 시간 받아와서
   3. setInterval함수로 시간 가게 한다.
*/

const clock = document.querySelector("h1#clock");

function getClock(){
    const todayDate = new Date();
    const hours = String(todayDate.getHours()).padStart(2,"0");
    const minutes = String(todayDate.getMinutes()).padStart(2,"0");
    const seconds = String(todayDate.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

getClock();
setInterval(getClock,1000);
