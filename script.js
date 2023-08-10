const quizData = [
    {
    question:"Which language runs in a web browser?",
    a:"Java",
    b:"C",
    c:"Python",
    d:"JavaScript",
    correct:"d",
    },
    {
    question:"What does CSS stand for?",
    a:"cff",
    b:"css",
    c:"Cascading Simple Sheets",
    d:"case ss",
    correct:"b",
    },
    {
    question:"What is your name?",
    a:"sarath",
    b:"raj",
    c:"vicky",
    d:"suhail",
    correct:"a",
    
    },
    {
    question:"What is the year now?",
    a:"2020",
    b:"2023",
    c:"2025",
    d:"none of the above",
    correct:"b",
    },
    ];
    const quiz = document.getElementById('quiz')
    const answerEls = document.querySelectorAll('.answer')
    const questionEl = document.getElementById('question')
    const a_text = document.getElementById('a_text')
    const b_text = document.getElementById('b_text')
    const c_text = document.getElementById('c_text')
    const d_text = document.getElementById('d_text')
    const submitBtn = document.getElementById('submit')
    let currentQuiz = 0;
    let score = 0;
    loadQuiz()
    function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    }
    function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
    }
    function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
    if(answerEl.checked){
    answer = answerEl.id
    
    }
    })
    return answer
    }
    submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    console.log(answer)
    if(answer){
    if(answer === quizData[currentQuiz].correct){
    score++
    }
    currentQuiz++
    if(currentQuiz < quizData.length){
    loadQuiz()
    }else{
    quiz.innerHTML= `
    <h2>You answered ${score}/${quizData.length} questions
    
    correctly</h2>
    
    <button onclick="location.reload()">Reload</button>
    `
    }
    }
    })