// ********************     RENDERING FUNCTIONS     ******************* //




//  MAIN MENU SCREEN //

function renderStartMenu() {
        $('.main').html(`
        <section class='mainMenu'>
            <img src='pictures/uncle-sam.jpg' alt='uncle-sam'>
            <h1>How well do you know American History!</h1>
            <button type='button' class='startButton'>Let's Begin!</button>
        </section>
    `)
}



// QUESTIONNAIRE //
function renderQuestion() {

        let question = getAppQuestion();

        $('.main').html(`
        <section class='screenQuestion'>
            <form class='questionForm'>
                <fieldset class='radio'>
                    <legend class='questiontxt'>${question.text}</legend>
                        <div class='flex-container'>

                            <label>
                                <input type='radio' value='${question.ans1}' name='answer' required>
                                ${question.ans1}
                            </label>
                            <label>
                                <input type='radio' value='${question.ans2}' name='answer' required>
                                ${question.ans2}
                            </label>
                            <label>
                                <input type='radio' value='${question.ans3}' name='answer' required>
                                ${question.ans3}
                            </label>
                            <label>
                                <input type='radio' value='${question.ans4}' name='answer' required>
                                ${question.ans4}
                            </label>

                        </div> 

                </fieldset>

                <button>Submit</button>
            </form>
            
        </section>
    `)
}

// ANSWER SCREEN //
function renderAnswer(answer, correctAnswer, explanation) {

//CORRECT ANSWER
    if(answer == correctAnswer) {
        $('.main').html(`
        <section class='correctScreen'>
            <h1>CORRECT!</h1>
            <div>The answer is:</div>
            <div>${correctAnswer}</div>
            <br>
            <div>${explanation}</div>
            <br>
            <button class='nextQuestion'>NEXT</button>    
        </section>
    `)
}

// WRONG ANSWER
    else {
        $('.main').html(`
        <section class='correctScreen'>
            <h1>WRONG!</h1>
            <div>Your answer was:</div>
            <div>${answer}</div>
            <br>
            <div>The correct answer is:</div>
            <div>${correctAnswer}</div>
            <br>
            <div>${explanation}</div>
            <br>
            <button class='nextQuestion'>NEXT</button>    
        </section>
        `)
    }
}

// FEEDBACK SCREEN //
function renderFeedback() {
        let won = getScore() == getTotalQuestions();

         $('.main').html(`
        <section class='feedbackScreen'>
            <h1>${ won ? 'WOW! You know American History!': 'Close! Keep Trying!'}</h1>
            <br><br>
            <div><span>Final Score</span>: <span>${getScore()}</span>/${getTotalQuestions()}</div>
            <br><br>
            <button class='startButton'>Try Again</button>
        </section>
    `)
}

// SCORE //
function score() {
    $('.score').html(appScore);

    let questionNum = appQuestion+1;
    questionNum = Math.min(questionNum, getTotalQuestions());
    $('.questionNumber').html(questionNum);
}

// ********************     CALLBACK FUNCTIONS      ******************** //


function handleStartQuiz() {
    $('.main').on('click', '.startButton', function(event) {
        appScore = 0;
        appQuestion = 0;
        renderQuestion();
        score();
    });
}


function handleAnswerOrSubmit() {
    $('.main').on('submit', 'form', function(event) {
        event.preventDefault();

        let answer = $("input[name='answer']:checked", ".questionForm").val();
        let correctQuestion = checkAnswer(answer,appQuestion);
        if(correctQuestion) {
            appScore++;
            score();
        }

       renderAnswer(answer, getCorrectAnswer(appQuestion),getExplanation(appQuestion));


    });
}

function handleNextQuestion() {
    $('.main').on('click', '.nextQuestion', function(event) {
        appQuestion++;
        score();

        if(appQuestion >= STORE.length) {
            renderFeedback();
        }
        else {
            renderQuestion();
        }
    });
}


function setUp() {
        renderStartMenu();
        handleStartQuiz();
         handleAnswerOrSubmit();
         handleNextQuestion();
         score();
    }  
 $(setUp);


// ***********************      UTILITY FUNCTION      *********************** //

function checkAnswer(answer, questionNumber) {
    let question = STORE[questionNumber];
    let correctAnswer = getCorrectAnswer(questionNumber);
    return correctAnswer == answer;
}

function getCorrectAnswer(questionNumber) {
    return ANSWERS[questionNumber];
}

function getExplanation(questionNumber) {
    return EXPLANATIONS[questionNumber];
}

function getAppQuestion() {
    return STORE[appQuestion];
}

function getScore() {
    return appScore;
}

function getTotalQuestions() {
    return STORE.length;
}

