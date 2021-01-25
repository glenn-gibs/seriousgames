
// Alle elementen uit de html file selecteren.
const title = document.getElementById("title");
const start = document.getElementById("start");
const startScherm = document.getElementById("startScherm");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const counter = document.getElementById("counter");
const score = document.getElementById("score");
const lives = document.getElementById("lives");
const endScore = document.getElementById("endScore");
const gameOver = document.getElementById("gameOver");
// Alle vragen in een array, elk element is een object met bijhorende eigenschappen zoals image, keuze A, B, etc.
// ook worden de buttons gekoppeld aan een correcte keuze, "A" of "B", dit wordt verder verwerkt in de checkAnswer functie

let questions = [
    {
        question : "Is dit de juiste handeling?",
        imgSrc : "images/afstandFout.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "B"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/afstandFout2.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "B"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/afstandGoed.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "A"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/bezoekFout.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "B"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/bezoekGoed.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "A"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/drukteFout.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "B"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/drukteGoed.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "A"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/groetenFout.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "B"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/groetenGoed.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "A"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/hoestenFout.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "B"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/hoestenGoed.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "A"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/mondkapjeFout.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "B"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/mondkapjeFout2.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "B"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/mondkapjeFout3.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "B"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/mondkapjeFout4.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "B"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/mondkapjeGoed2.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "A"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/mondkapjeGoed.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "A"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/mondkapjeGoed3.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "A"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/naarBuitenFout.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "B"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/naarBuitenFout2.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "B"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/naarBuitenFout3.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "B"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/naarBuitenFout4.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "B"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/naarBuitenGoed.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "A"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/niezenFout.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "B"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/niezenGoed.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "A"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/vriendenFout.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "B"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/vriendenGoed.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "A"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/wassenFout.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "B"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/wassenGoed.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "A"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/werkenFout.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "B"
    },{
        question : "Is dit de juiste handeling?",
        imgSrc : "images/werkenGoed.jpg",
        choiceA : "Ja",
        choiceB : "Nee",
        correct : "A"
    }
];

// variabelen voor de question array, timer, score en levens
// lastQuestion = lengte van de vragen array in normale taal (dus 31 vragen) 
  // -1 omdat een array bij 0 begint ipv 1
  // lastQuestion is daarom de index van de laatste vraag, en die is in mijn geval 30
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 10;
const questionTime = 0; // 10s
let TIMER;
let qscore = 0;
let levens = 3;



// vraag genereren, waarbij de array met de huidige vraag op de desbetreffende index in een variabele is gezet
// in de html file heb je keuze twee buttons met id "A" en id "B". Hier worden die buttons gekoppeld aan de
// choiceA en choiceB eigenschappen van een vraag element (object) uit de questions array die in variable q staat.
// Bij de eerste vraag is de index van runningQuestion 0, dus worden alle eigenschappen van vraag 1 gegenereerd, enzovoort

function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
}

// klik op de start button en de quiz begint
start.addEventListener("click",startQuiz);


// start quiz, titel en start button worden verborgen en de quiz container wordt getoond
function startQuiz(){
	title.style.display = "none";
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderCounter();
    renderLives();
    renderScore();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}



// timer aangemaakt en getoond met innerHTML

function renderCounter(){
    if(count >= questionTime){
        counter.innerHTML = count;
        count--
    }else{
        count = 10;
        levens--;
        lives.innerHTML = "<p>Levens: " + levens + "</p>";
        
        if (levens <= 0) {
   	    clearInterval(TIMER);
     	gameOverRender();
     }   // zolang de index van de huidige vraag kleiner dan de index is van de laatste vraag, dan springt ie
     // naar de volgende index en wordt de volgende vraag gegenereerd door de functie op te roepen.
        else if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // timer wordt gestopt en het eindscherm met de eindscore wordt gegenereerd.
            clearInterval(TIMER);
            endScoreRender();
        }
    }
}

 // genereert de levens <p>, zodat je die kan zien

 function renderLives(){
     lives.innerHTML = "<p>Levens: " + levens + "</p>";
     
 }

// idem voor de score
function renderScore(){
	score.innerHTML = "<p>Score: " + qscore + "</p>";
}


// Als er op een keuzebutton wordt geklikt en het antwoord komt overeen met de correct waarde van een element van
// de questions array, dan is de vraag correct en wordt de juiste functie aangeroepen
// Als dit niet het geval is, naar volgende vraag, timer gereset naar 10.

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        
        answerIsCorrect();
        
    }else{
    	answerIsWrong();
    }
    count = 10;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
        // Als ie niet meer naar de volgende index kan springen, dan wordt de timer gestopt en het eindscherm aangeroepen
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        endScoreRender();
    }
}


// Bij een correct antwoord komt er +1 bij de score bij
function answerIsCorrect(){
    qscore++;
    score.innerHTML = "<p>Score: " + qscore + "</p>";
} 

// Bij een fout antwoord gaat er 1 leven af en als de levens 0 of minder zijn wordt de timer gestopt
// en het gameOver scherm aangeroepen.
function answerIsWrong(){
    levens--;
    lives.innerHTML = "<p>Levens: " + levens + "</p>";

   if (levens <= 0) {
   	    clearInterval(TIMER);
     	gameOverRender();
     }
} 

// functie voor aanroepen eindscherm
function endScoreRender(){
    endScore.style.display = "block";
    endScore.innerHTML += "<p>Hoera! Je bent coronavrij! <br> Eindscore: "+ qscore +"</p>";
}

// functie voor aanroepen gameOver scherm
function gameOverRender() {
	gameOver.style.display = "block";
    gameOver.innerHTML += "<p>Game over</p>";
}


