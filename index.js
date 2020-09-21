// ********************     RENDERING FUNCTIONS     ******************* //




// ** MAIN MENU ** //

function renderStartMenu() {
    $('main').html(`
    <section class='mainMenu'>
        <h1>How well do you know American History!</h1>
        <button type='button' class='startButton'>Let's Begin!</button>
    </section>
    `)
}




// ** QUESTIONNAIRE ** //

function renderQuestion() {

    let question = getAppQuestion();

    $('main').html(`
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
                    </div>
                </label>
            </fieldset>
            <button type='submit'>Submit</button>
        </form>
    </section>
    `)

}

// *** END OF QUESTIONNAIRE *** //

function renderAnswer(answer, correctAnswer, explanation) {
//CORRECT ANSWER
    if(answer == correctAnswer) {
        $('main').html(`
        <section class='correctScreen'>
        <h1>CORRECT!</h1>
        <div>The answer is:</div>
        <div>${correctAnswer}</div>
        <br><br>
        <div>${explanation}</div>
        <br>
        <button type='button' class='nextQuestion'>NEXT</button>    
    </section>
    `)
}
// WRONG ANSWER
    else {
        $('main').html(`
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
        <button type='button' class='nextQuestion'>NEXT</button>    
    </section>
        `)
    }
}

function renderFeedback() {
    let won = getScore() == getTotalQuestions();
    $('main').html(`
    <section class='feedbackScreen'>
    <h1>${ won ? 'WOW! You do know the history!': 'Close! Keep Trying!'}</h1>
    <h2>${ won ? 'CONGRATS! Your Scored 6 out 6! ': 'You will get all the questions right next time!'}</h2>
    <br><br>
    <button type='button' class='startButton'>Again</button>
    </section>
    `)
}
function score() {
    $('.score').html(appScore);

    let questionNum = appQuestion+1;
    questionNumb = Math.min(questionNum, getTotalQuestions());
    $('.questionNumber').html(questionNum);
}

// ********************     CALLBACK FUNCTIONS      ******************** //




function handleStartQuiz() {
    $('main').on('click', '.startButton', function(event) {
        appScore = 0;
        appQuestion = 0;
        renderQuestion();
        score();
    });
}

function handleAnswerOrSubmit() {
    $('main').on('submit', 'form', function(event) {
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
    $('main').on('click', '.nextQuestion', function(event) {
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
    $(function(){
        renderStartMenu();
        handleStartQuiz();
         handleAnswerOrSubmit();
         handleNextQuestion();
         score();
    
});
}
setUp();


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


/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
