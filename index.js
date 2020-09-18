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

// *** END OF MAIN MENU *** //




// ** QUESTIONNAIRE ** //

function renderQuestion() {

    //let question = getAppQuestion();

    $('main').html(`
    <section class='screenQuestion'>
        <form class='questionForm'>
            <fieldset class='radio'>
                <legend>${question.text}</legend>

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
                    <input type='radio' value'=${question.ans4}' name='answer' required>
                    ${question.ans4}
                </label>
            </fieldset>
            <button type='submit'>Submit</button>
        </form>
    </section>
    `)
}

// *** END OF QUESTIONNAIRE *** //




// ********************     CALLBACK FUNCTIONS      ******************** //





function handleStartQuiz() {
    $('main').on('click', '.startButton', function(event) {
        appScore = 0;
        appQuestion = 0;
        // update the render question
        // update the render score.
    })
}

function handleAnswer() {
    $('main').on('submit', 'form', function(event) {
        event.preventDefault();

        let answer = $("input[name='answer']:checked", ".questionForm").val();
        let correct = check


    })
}

// *********************     FUNCTION SET-UP        ********************** //



function setUp() {
    handleStartQuiz();
    renderStartMenu();
    renderQuestion();

}

$(setUp);


// ***********************      UTILITY FUNCTION      *********************** //




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