console.log("Script started");

/* Questions objects should be formatted like this:
{
    question: "What is the capital of Arizona?",
    option1: "Tucson",
    option2: "Phoenix",
    option3: "Yuma",
    option4: "Flagstaff",
    answer: "Phoenix"
}
*/

// TODO: Create an array of objects to store the questions, options, and answer
let questions = [
    {
        question: "What is the capitol of Arizona?",
        option1:  "Phoenix",
        option2:  "Yuma",
        option3:  "Oracle",
        option4:  "Tucson",
        answer:   "Phoenix"
    },
    {
        question: "How many states are in the U.S.A?",
        option1:  "54",
        option2:  "420",
        option3:  "50",
        option4:  "Protein tubes",
        answer:   "50"
    }
];
console.log(questions);
// TODO: Declare an empty array that will hold the user's answers
let userAnswer = [];
// TODO: Declare a variable to keep track of which question (index) we are on
let questionNum = 0;

function showNextQuestion() {
    // TODO: Get the current question
    let conQus = questions[questionNum];
    // TODO: Set the text of the question element
    let question = document.getElementById("question")
    question.innerText = conQus.question;
    // TODO: Set the text of each option element
    let option1 = document.getElementById("option1text");
    option1.innerText = conQus.option1;
    
    let option2 = document.getElementById("option2text");
    option2.innerText = conQus.option2;
    
    let option3 = document.getElementById("option3text");
    option3.innerText = conQus.option3;
    
    let option4 = document.getElementById("option4text");
    option4.innerText = conQus.option4;
}

// TODO: Call showNextQuestion to load the first question when the page loads
showNextQuestion();

function submitAnswer(event) {
    console.log("Submit clicked");
    // TODO: Prevent the form from reloading the page
    event.preventDefault();
    // Get the radio button input elements
    let option1 = document.getElementById("option1");
    let option2 = document.getElementById("option2");
    let option3 = document.getElementById("option3");
    let option4 = document.getElementById("option4");

    // TODO: Get the current question
    let conQus = questions[questionNum];
    // TODO: Use a conditional (if/else-if) to check which option was clicked and push the option text into the userAnswer array
    if (option1.checked){
            //add op 1 to an
            userAnswer.push(conQus.option1)
        }
        else if (option2.checked){
            userAnswer.push(conQus.option2)
        }
        else if (option3.checked){
            userAnswer.push(conQus.option3)
        }
        else if (option4.checked){
            userAnswer.push(conQus.option4)
        }
        else {
            alert("You need to pick a answer")
        }
    // TODO: Add one to the question index
   
    // TODO: Load the next question
}

function checkAnswers() {
    // TODO: Iterate through the user answers array and count how many are correct

    // TODO: Show an alert to the user with how many they got right out of the total

    // TODO: Reset and start over
}