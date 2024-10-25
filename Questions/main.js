var questions = [
  {
      question: 'گوگل در چه سالی تاسیس شد؟',
      choices: ['2002', '2000', '1998', '1989'],
      correctAnswer: 2
  },
  {
      question: 'مخترع اینترنت چه کسی است؟',
      choices: ['نیکولا تسلا', 'مکلوهان', 'ونار بوش', 'رابرت کان'],
      correctAnswer: 2
  },
  {
      question: 'مدیر عامل شرکت اپل چه کسی است؟',
      choices: ['استیون جابز', 'بیل گیتس', 'تیم کوک', 'لیزا برنان'],
      correctAnswer: 0
  },
  {
      question: 'اولین کامپیوتر جهان در چه سالی تولید شد؟',
      choices: ['1800', '1875', '1850', '1884'],
      correctAnswer: 1
  },
  {
      question: 'گرانترین شرکت فناوری 2022 چه شرکتی است؟',
      choices: ['مایکروسافت', 'تسلا', 'آمازون', 'اپل'],
      correctAnswer: 3
  }
];

let currentQuestion = 0
let correctAnswer = 0
let quizeOver = false

window.addEventListener('DOMContentLoaded', e => {
  displayCurrentQuestion()
  let quizeMessage = document.querySelector('.quizMessage')
  quizeMessage.style.display = 'none'
  document.querySelector('.nextButton').addEventListener('click', ()=>{
    if(!quizeOver){
      let radioBtnsChecked = document.querySelector('input[type=radio]:checked')
      if(radioBtnsChecked === null){
        quizeMessage.innerText = 'لطفا پاسخ خود را انتخاب نمایید'
        quizeMessage.style.display = 'block'
      } else {
        console.log(radioBtnsChecked.value)
        quizeMessage.style.display = 'none'
        if(parseInt(radioBtnsChecked.value) === questions[currentQuestion].correctAnswer){
          correctAnswer += 1
        }
        currentQuestion += 1
        if(currentQuestion < questions.length){
          displayCurrentQuestion()
        } else {
          displayScore()
          document.querySelector('.nextButton').innerText = 'نمایش دوباره؟'
          quizeOver = true
        }
      }
    } else{
      quizeOver = false
      document.querySelector('.nextButton').innerText = 'سوال بعدی'
      resetQuiz()
      displayCurrentQuestion()
      hideScore()
    }
  })
})

function displayCurrentQuestion(){
  let question = questions[currentQuestion].question
  let questionClass = document.querySelector('.quizContainer > .question')
  let choiceList = document.querySelector('.quizContainer > .choiceList')
  let numChoices = questions[currentQuestion].choices.length

  questionClass.innerText = question

  choiceList.innerHTML = ''

  let choice
  for(let i = 0; i < numChoices; i++){
    choice = questions[currentQuestion].choices[i]
    let li = document.createElement('li')
    li.innerHTML = '<li><input type="radio" value="' + i + '" name="dynradio" />' + choice + '</li>'
    choiceList.appendChild(li);
  }
}

function resetQuiz(){
  currentQuestion = 0
  correctAnswer = 0
  hideScore()
}

function displayScore(){
  document.querySelector('.quizContainer > .result').innerText = 'امتیاز شما: ' + correctAnswer + ' از' + questions.length;
  document.querySelector('.quizContainer > .result').style.display = 'block';
}

function hideScore(){
  document.querySelector('.result').style.display = 'none'
}
