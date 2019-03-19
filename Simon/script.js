var block1 = document.querySelector(".block1");
var block2 = document.querySelector(".block2");
var block3 = document.querySelector(".block3");
var block4 = document.querySelector(".block4");
var aBlock1 = document.querySelector(".a-block-1");
var aBlock2 = document.querySelector(".a-block-2");
var aBlock3 = document.querySelector(".a-block-3");
var aBlock4 = document.querySelector(".a-block-4");
var startGameBtn = document.querySelector(".btn");
var reStartGameBtn = document.querySelector(".btn-danger");
var gameInfo = document.querySelector(".restart");
var numberOfClicks = 2;
var lvl = 0;
var globalTiming = 1000;
var animationDelay = 1500;

var vilibleBtn = true;
var mass = [block1,block2,block3,block4];
var generateOrder = [];
var result = [];

function startGame() {
vilibleBtn = false;
lvl++;
gameInfo.style.display = "inline-block";
gameInfo.textContent = "Уровень: " + lvl + '\n';
gameInfo.textContent += "Блоков: " + numberOfClicks;
if(vilibleBtn){
	startGameBtn.style.display = "block";
}
else {
	startGameBtn.style.display = "none";
}
var crutch = getRandomInt(1,5);	
var randomNumber = getRandomInt(1,5);
var checkNumber = 0;
console.log("Игра началась");
enableBtn();
for(var i = 1; i<=numberOfClicks;i++){
	var randomNumber = getRandomInt(1,5);
		while(checkNumber === randomNumber)
		{
			randomNumber = getRandomInt(1,5);
		}
	switch (randomNumber) {
  case 1:
  	setTimeout(amimationGo1, globalTiming);
    globalTiming+=animationDelay;
    generateOrder.push(1);
    break;
  case 2:
  	setTimeout(amimationGo2, globalTiming);		
  	globalTiming+=animationDelay;
  	generateOrder.push(2);
    break;
  case 3:
  	setTimeout(amimationGo3, globalTiming);
  	globalTiming+=animationDelay;
  	generateOrder.push(3);
    break;
  case 4:
  	setTimeout(amimationGo4, globalTiming);
  	globalTiming+=animationDelay;
  	generateOrder.push(4);
    break;
}
checkNumber = randomNumber;
}
console.log(generateOrder);
}	

function reStartGame() {
	disableBtn();
	startGameBtn.style.display = "inline-block";
	reStartGameBtn.style.display = "none";
	gameInfo.style.display = "none";
	lvl = 0;
	globalTiming = 1000;
	generateOrder = [];
    result = [];
    numberOfClicks = 2;
}
//пиздец какой-то
function removeAnimation() {
	block1.classList.remove('animate-1');
	block2.classList.remove('animate-2');
	block3.classList.remove('animate-3');
	block4.classList.remove('animate-4');
}
function amimationGo1() {
	block1.classList.add("animate-1");
	setTimeout(removeAnimation,1000);
}
function amimationGo2() {
	block2.classList.add("animate-2");
	setTimeout(removeAnimation,1000);
}
function amimationGo3() {
	block3.classList.add("animate-3");
	setTimeout(removeAnimation,1000);
}
function amimationGo4() {
	block4.classList.add("animate-4");
	setTimeout(removeAnimation,1000);
}

function click1() {
	result.push(1);
	checkResult();
}
function click2() {
	result.push(2);
	checkResult();
}
function click3() {
	result.push(3);
	checkResult();
}
function click4() {
	result.push(4);
	checkResult();
}
function checkResult() {
	if(result.length == generateOrder.length){
	for(var i = result.length-1;i>=0;i--){
		if(result[i] == generateOrder[i]){
			console.log("next lvl");
			numberOfClicks = numberOfClicks + 1;
			generateOrder = [];
			result = [];
			animationDelay = 1500;
			globalTiming = 1000;
			startGame();
		}
	}
}

	for(var i = 0;i<result.length;i++){
		if(!(result[i] == generateOrder[i])){
			disableBtn();
			console.log("eror");
			gameInfo.textContent = "Ошиблись, игра закончена на " + lvl + " уровне ";
			reStartGameBtn.style.display = "inline-block";
		}
	}
}
function disableBtn() {
	aBlock1.classList.add("disabled");
	aBlock2.classList.add("disabled");
	aBlock3.classList.add("disabled");
	aBlock4.classList.add("disabled");
	block1.classList.add("disabled");
	block2.classList.add("disabled");
	block3.classList.add("disabled");
	block4.classList.add("disabled");
}
function enableBtn() {
	block1.classList.remove("disabled");
	block2.classList.remove("disabled");
	block3.classList.remove("disabled");
	block4.classList.remove("disabled");
	aBlock1.classList.remove("disabled");
	aBlock2.classList.remove("disabled");
	aBlock3.classList.remove("disabled");
	aBlock4.classList.remove("disabled");	
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
