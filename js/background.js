/* 이미지 랜덤으로 보여주기
   1. 이미지 파일 arr 만들기
   2. 이미지 파일 랜덤으로 선택해주는 변수 만들기
   3. 이미지 요소 만들어 바디에 추가
*/

const images = ["1.jpg","2.jpg","3.jpg","4.jpg"];
//https://unsplash.com/

const choosenImage = images[Math.floor(Math.random()*images.length)];

const bgImg = document.createElement("img"); // 이미지 요소 만들기
bgImg.src = `img/${choosenImage}`;
//bgImg.classList.add("backgourndImg");

document.body.appendChild(bgImg);