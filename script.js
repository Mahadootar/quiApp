function init() {
    document.getElementById('amonu_of_uestion').innerHTML = allQuestions.length;
    rendertQuestions();
}

let rightAnsweredQuestion = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('./assets/audio/success/success.mp3')
let AUDIO_FAIL = new Audio('./assets/audio/fail/fail.mp3')

let start = document.getElementById('start_ofBtn')

function startPage(){
     document.getElementById('img_backgroung').style.display = 'none';
     document.getElementById('question_body').style.display = 'flex';
     document.getElementById('que_big_container').style.flex = '1';
    }

    start.addEventListener('click', () => {
       startPage();

    })


function rendertQuestions(){

    if (currentQuestion >= allQuestions.length) {
    let endstaion = document.getElementById('brain_div');
    document.getElementById('question_body').style.display = 'none';
    document.getElementById('img_backgroung').style.display = 'none';
    document.getElementById('end_question').innerHTML = allQuestions.length;
    document.getElementById('right_score_q').innerHTML = rightAnsweredQuestion;

    endstaion.style.display = 'flex';
    }else{
    let percent = (currentQuestion + 1)/ allQuestions.length;
    percent = Math.round(percent * 100);
    
    let bar = document.getElementById('pr_bar');
    bar.style.width = `${percent}%`;
    bar.innerHTML = `${percent}%`;
    let question = allQuestions[currentQuestion];
    document.getElementById('quesntionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function rightAnswer(selection){
    let question = allQuestions[currentQuestion];
    let selectedQuestionNummber = selection.slice(-1);

    let IdOfRightAnswer = `answer_${question['correct_answer']}`;

    if (selectedQuestionNummber == question['correct_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightAnsweredQuestion++;
        AUDIO_SUCCESS.play();
        
    }else{
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(IdOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();

        
    }
    document.getElementById('nextQueButton').disabled = false;
}

function nextQuestion(){
    currentQuestion++;
    document.getElementById('nextQueButton').disabled = true;
    resetButton();
    rendertQuestions();
   
}

function resetButton(){
    document.getElementById('question_Number').innerHTML = currentQuestion + 1;
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}

function replayFunc(){
    rightAnsweredQuestion = 0;
    currentQuestion = 0;
    let endstaion = document.getElementById('brain_div');
    endstaion.style.display = 'none';   
    document.getElementById('question_body').style.display = 'flex';
    document.getElementById('nextQueButton').disabled = true;
    resetButton();
    rendertQuestions();
    document.getElementById('img_backgroung').style.display = 'none';
}

