window.addEventListener('load', init);

const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}

const currentLevel = levels.medium;

// global variable
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM element
const wordInput = document.getElementById('word-input');
const currentWord = document.getElementById('current-word');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const message = document.getElementById('message');
const seconds = document.getElementById('seconds');

// array yang menampung kata untuk ditampilkan
const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'programming',
    'website',
    'revolver',
    'echo',
    'sibling',
    'parent',
    'document',
    'getElementById',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition',
    'declaration',
    'object',
    'oop'
];

function init() {
    // tampilkan level saat ini
    seconds.innerHTML = currentLevel;
    // panggil fungsi showWord
    showWord(words);
    // panggil fungsi untuk mencocokan kata
    window.addEventListener('input', startMatch);
    // panggil fungsi countDown
    setInterval(countDown, 1000);
    // panggil fungsi checkStatus
    setInterval(checkStatus, 50);
}

// start match
function startMatch() {
    if ( matchWord() ) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    // jika score -1, maka tampilkan 0
    if ( score == -1 ) {
        scoreDisplay.innerHTML = 0;   
    }else {
        scoreDisplay.innerHTML = score;
    }
    
}

// fungsi untuk mencocokan kata pada array dan user input
function matchWord() {
    if ( wordInput.value === currentWord.innerHTML ) {
        message.innerHTML = 'Correct !!!';
        return true;
    }else {
        message.innerHTML = '';
        return false;
    }
}

// ambil dan tampilkan kata dari dalam array
function showWord(words) {
    // random index
    const randIndex = Math.floor(Math.random() * words.length);
    // tampilkan kata sesuai dengan index yang telah diacak
    currentWord.innerHTML = words[randIndex];
}

// fungsi untuk menghitung mundur 
function countDown() {
    // periksa kalau waktunya tidak melebihi 0
    if ( time > 0 ) {
        time--;
    }else if ( time === 0 ) {
        isPlaying = false;
    }

    timeDisplay.innerHTML = time;
}

// cek status game
function checkStatus() {
    if ( !isPlaying && time === 0 ) {
        message.innerHTML = 'Game Over !!!';
        score = -1;
    }
}