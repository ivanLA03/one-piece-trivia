import questions from "./question.js"

const question = document.querySelector(".question"),
    sendButton = document.querySelector(".sendButton"),
    resetButton = document.querySelector(".reset"),
    backButton = document.querySelector(".back")
let numberQuestion = 0,
    cont = 0,
    notification = document.querySelector(".notification")

sendButton.addEventListener("click", () => handleCheckAnswer())
resetButton.addEventListener("click", () => reset())
backButton.addEventListener("click", () => back())
document.addEventListener("keyup", function(event){
    if(event.code === "Enter"){
        handleCheckAnswer()
    }
})

function showQuestion(){
    if(numberQuestion == 0){
        question.innerHTML = questions[numberQuestion].question
        notification.style.textShadow = "2px 2px 0px black"
    } 
    else {
        setTimeout(() => {
            question.innerHTML = questions[numberQuestion].question
        }, 1200)
        question.style.fontSize = "30px"
    }
    setTimeout(() => {
    question.innerHTML = questions[numberQuestion].question
    }, 1200)
    question.style.fontSize = "30px"
}

function handleCheckAnswer(){
    checkAnswer()
    showNotification()
}

function checkAnswer(){
    if (document.querySelector(".answer").value.toLowerCase() == questions[numberQuestion].answer){
        notification.innerHTML = "CORRECTO!!"
        notification.style.color = "rgb(15, 152, 0)"
        cont++
        setTimeout(() => {
            notification.innerHTML = ""
        }, 1200)
    } else {
        notification.innerHTML = "INCORRECTO"
        notification.style.color = "red"
        setTimeout(() => {
            notification.innerHTML = ""
        }, 1200)
    }
}

function showNotification(){
    numberQuestion++
    document.querySelector(".answer").value = ''
    if(numberQuestion >= questions.length){
        setTimeout(() => {
            notification.innerHTML = `Respondiste bien ${cont} de ${numberQuestion} preguntas`
            notification.style.color = "black"
            notification.style.textShadow = "none"
            notification.style.fontFamily = "none"
            question.innerHTML = 'Has respondido todas las preguntas'
            question.style.fontSize = "35px"
        }, 1200)
    }
    else{showQuestion()}
}

function reset(){
    numberQuestion = 0
    cont = 0
    showQuestion()
    notification.innerHTML = ""
}

function back(){
    window.location.href = "../index.html"
}

showQuestion()