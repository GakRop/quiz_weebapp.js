const quiz = [
    {
        question: "ゲーム史上、もっとも売れたゲーム機は次のうちどれ？",
        answers: [
            "スーパーファミコン",
            "プレイステーション２",
            "ニンテンドースイッチ",
            "ニンテンドーDS"
        ],
        correct: "ニンテンドーDS"
    },
    {
        question: "糸井重里が企画にかかわった、任天堂の看板ゲームといえば？",
        answers: [
            "MOTHER2",
            "スーパーマリオブラザーズ３",
            "スーパードンキーコング",
            "星のカービィ"
        ],
        correct: "MOTHER2"
    },
    {
        question: "FF４の主人公の名前は？",
        answers: [
            "フリニオール",
            "クラウド",
            "ティーダ",
            "セシル"
        ],
        correct: "セシル"
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

const setUpQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < buttonLength){
        $button[buttonIndex].textContent =quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setUpQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent){
        window.alert("correct!")
        score++;
    }

    else{
        window.alert("wrong!")
    }

    quizIndex++;

    if (quizIndex < quizLength){
        setUpQuiz();
    }

    else{
        window.alert("done. your score was"+score+"/"+quizLength);
    }

};

let handleIndex = 0;
while(handleIndex < buttonLength){
    $button[handleIndex].addEventListener("click", (e) => {
        clickHandler(e)
    });
    handleIndex++;
}