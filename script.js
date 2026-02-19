function init() {
    document.getElementById('amonu_of_uestion').innerHTML = allQuestions.length;
    rendertQuestions();
}

let currentQuestion = 0;

function rendertQuestions() {
    let question = allQuestions[currentQuestion];
    document.getElementById('quesntionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
   
}

function rightAnswer(selection){
    let question = allQuestions[currentQuestion];
    let selectedQuestionNummber = selection.slice(-1);

    if (selectedQuestionNummber == question['correct_answer']) {
        console.log('richtige Antwort!!');   
    }else{
        console.log('Falsche Anwort!');
        
    }
    
}