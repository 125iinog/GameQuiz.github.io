const quiz = [
    {
        question: "平成29年（2017年）3月3日に発売された任天堂の新型ハード“Nintendo Switch”。その開発コードネームは？",
        answers: [
            "NS",
            "NX",
            "NSL",
            "NA"
        ],
        correct: "NX"
    },
    {
        question: "“平成30年（2018年）12月3日に発売されたプレイステーション クラシック”。初代プレイステーションを模して作られたこのハードの体積をオリジナル版プレイステーションと比較したとき、どれだけコンパクトになっている？",
        answers: [
            "約50%",
            "約60%",
            "約70%",
            "約80%"
        ],
        correct: "約80%"
    },
    {
        question: "つぎのうち、平成28年（2016年）に発売・配信されたものではないアイテム、ゲームタイトルはどれ？",
        answers: [
            "プレイステーション VR",
            "ニンテンドークラシックミニ ファミリーコンピューター",
            "ポケモンGO",
            "Newニンテンドー2DS LL"
        ],
        correct: "Newニンテンドー2DS LL"
    },
    {
        question: "平成26年（2014年）、もっとも多い国内販売本数を記録したゲームタイトルはつぎのうちどれ？",
        answers: [
            "モンスターハンター4G",
            "大乱闘スマッシュブラザーズ for Nintendo 3DS",
            "ポケットモンスター オメガルビー・アルファサファイア",
            "妖怪ウォッチ2 元祖／本家"
        ],
        correct: "妖怪ウォッチ2 元祖／本家"
    },
    {
        question: "平成31年（2019年）8月2日に公開予定の映画『ドラゴンクエスト ユア・ストーリー』の原案となっている『ドラクエ』シリーズ作品はどれ？",
        answers: [
            "ドラゴンクエスト",
            "ドラゴンクエストIII　そして伝説へ…",
            "ドラゴンクエストV　天空の花嫁",
            "ドラゴンクエストXI　過ぎ去りし時を求めて"
        ],
        correct: "ドラゴンクエストV　天空の花嫁"
    }
]

const quizLength = quiz.length;
let quizIndex = 0;

let score = 0;

const $button = document.getElementsByTagName("button");

//定数の文字列をHTMLに反映させる
const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    for (let i = 0; i < $button.length; i++) {
        $button[i].textContent = quiz[quizIndex].answers[i];
    }
};

setupQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert("正解！")
        score++;
    } else {
        window.alert("不正解！")
    };

    quizIndex++;

    if (quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");
    }
};

for (let i = 0; i < $button.length; i++) {
    $button[i].addEventListener("click", (e) => {
        clickHandler(e);
    });
}