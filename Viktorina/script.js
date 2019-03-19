var firstQ = {
	question:"Сколько материков на земле?",
	wrongAnswer1:4,
	wrongAnswer2:5,
	rightAnswer:6,
};
var secondQ = {
	question:"Как едят коты?",
	wrongAnswer1:"Лапами",
	wrongAnswer2:"Хвостом",
	rightAnswer:"Пастью",
};
var thirdQ = {
	question:"Чего хотят дети?",
	wrongAnswer1:"Брокколи",
	wrongAnswer2:"Шпинат",
	rightAnswer:"Шоколадку",
};
var forthQ = {
	question:"Сколько цветов у радуги?",
	wrongAnswer1:"9",
	wrongAnswer2:"8",
	rightAnswer:"7",
};
var fifthQ = {
	question:"В чем смысл жизни?",
	wrongAnswer1:"Кушать",
	wrongAnswer2:"Выпивать",
	rightAnswer:"42!",
};
var questionField = document.querySelector(".question-field");
var btnField1 = document.querySelector(".fildbuttons1");
var btnField2 = document.querySelector(".fildbuttons2");
var startBtn = document.getElementById("btn-success");
var reStartBtn = document.getElementById("btn-warning");

var questionAns1 = document.querySelector(".questionAns1");
var questionAns2 = document.querySelector(".questionAns2");
var questionAns3 = document.querySelector(".questionAns3");

var quetionMass = [firstQ,secondQ,thirdQ,forthQ,fifthQ];
var questionNubber = 0;
var questionAnser = 0;
var totalRightAnswers = 0;

var nextStep = function(elem){
	var element = elem;
	checkAnswer(element);
	nextQuestion();
};
var startGame = function(){
		mixQuestions();
		var questionBtns = document.querySelector(".hidden");

		questionBtns.classList.add("unhidden");
		startBtn.classList.remove("btn-success");
		startBtn.classList.remove("btn");
		startBtn.classList.add("hidden");
		
		questionField.value = quetionMass[questionNubber].question;
		questionAns1.textContent = quetionMass[questionNubber].wrongAnswer1;
		questionAns2.textContent = quetionMass[questionNubber].wrongAnswer2;
		questionAns3.textContent = quetionMass[questionNubber].rightAnswer;
		questionNubber++;
};
var nextQuestion = function(){
	mixQuestions();
	if(questionNubber == quetionMass.length){
		questionField.value = "Вопросов больше нет! \n";
		questionField.value += "Правильных ответов: " + totalRightAnswers;
		viewRestartField();
	} else{	
		questionField.value = quetionMass[questionNubber].question;
		questionAns1.textContent = quetionMass[questionNubber].wrongAnswer1;
		questionAns2.textContent = quetionMass[questionNubber].wrongAnswer2;
		questionAns3.textContent = quetionMass[questionNubber].rightAnswer;
		questionNubber++;
	}
};
var checkAnswer = function(elem){
	if(elem.textContent == quetionMass[questionAnser++].rightAnswer){
		totalRightAnswers++;
	}
};
var restartGame = function(){
	questionNubber = 0;
 	questionAnser = 0;
 	reStartBtn.classList.remove("btn");
 	reStartBtn.classList.remove("btn-warning");
 	reStartBtn.classList.add("hidden");
 	startBtn.classList.add("btn");
 	startBtn.classList.add("btn-success");
 	if(totalRightAnswers == quetionMass.length){
 		questionField.value = "Ну и зачем заново? и так на все правильно ответил(а)";
 	} else{
 		questionField.value = "В пред. раз было " + totalRightAnswers + " прав. ответ. постарайся лучше!";
 	}
 	totalRightAnswers = 0;
};
var onload = function(){
	reStartBtn.classList.add("hidden");
};
var viewRestartField = function(){
	btnField1.classList.remove("unhidden");
	reStartBtn.classList.remove("hidden");
 	reStartBtn.classList.add("btn");
 	reStartBtn.classList.add("btn-warning");
}
function mixQuestions() {
	//Стыдно что внизу написано
	var caseNumber = getRandomInt(0,4);
switch (caseNumber) {
  case 0:
    btnField1.appendChild(questionAns2);
    btnField1.appendChild(questionAns3);
    btnField1.appendChild(questionAns1);
    break;
  case 1:
    btnField1.appendChild(questionAns2);
    btnField1.appendChild(questionAns3);
    btnField1.appendChild(questionAns1);
    break;
  case 2:
    btnField1.appendChild(questionAns1);
    btnField1.appendChild(questionAns2);
    btnField1.appendChild(questionAns3);
    break;
  case 3:
    btnField1.appendChild(questionAns3);
    btnField1.appendChild(questionAns1);
    btnField1.appendChild(questionAns2);    
    break;
}}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}