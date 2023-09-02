document.querySelector('.boxOne').addEventListener('click', runEventOne)

function runEventOne(e){
    document.querySelector('.arrowOne').classList.toggle('rotate');
    document.querySelector('.questionOne').classList.toggle('open');
    document.querySelector('.answerOne').classList.toggle('show')
}

document.querySelector('.boxTwo').addEventListener('click', runEventTwo)

function runEventTwo(e){
    document.querySelector('.arrowTwo').classList.toggle('rotate');
    document.querySelector('.questionTwo').classList.toggle('open');
    document.querySelector('.answerTwo').classList.toggle('show')
}

document.querySelector('.boxThree').addEventListener('click', runEventThree)

function runEventThree(e){
    document.querySelector('.arrowThree').classList.toggle('rotate');
    document.querySelector('.questionThree').classList.toggle('open');
    document.querySelector('.answerThree').classList.toggle('show')
}

document.querySelector('.boxFour').addEventListener('click', runEventFour)

function runEventFour(e){
    document.querySelector('.arrowFour').classList.toggle('rotate');
    document.querySelector('.questionFour').classList.toggle('open');
    document.querySelector('.answerFour').classList.toggle('show')
}

document.querySelector('.boxFive').addEventListener('click', runEventFive)

function runEventFive(e){
    document.querySelector('.arrowFive').classList.toggle('rotate');
    document.querySelector('.questionFive').classList.toggle('open');
    document.querySelector('.answerFive').classList.toggle('show')
}