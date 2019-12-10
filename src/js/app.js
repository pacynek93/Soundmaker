const stop = document.querySelector('.stop');
const audio1 = new Audio('/images/sounds/poker-chips-daniel_simon(1).mp3');
const button1 = document.querySelector('.pokerChips');
const audio2 = new Audio('/images/sounds/soundbible-person-whistling-at-girl-daniel_simon.mp3');
const button2 = document.querySelector('.whistling');
const audio3 = new Audio('/images/sounds/doberman-pincher_daniel-simion.mp3');
const button3 = document.querySelector('.doberman');
const audio4 = new Audio('/images/sounds/fire-truck-air-horn_daniel-simion.mp3');
const button4 = document.querySelector('.fireTruck');
const audio5 = new Audio('/images/sounds/cartoon-telephone_daniel_simion.mp3');
const button5 = document.querySelector('.cartoonPhone');
const audio6 = new Audio('/images/sounds/police-whistle-daniel_simon.mp3');
const button6 = document.querySelector('.police');
const volumeButton1 =document.querySelector('.volumeButton1');
const volumeButton2 =document.querySelector('.volumeButton2');
const volumeButton3 =document.querySelector('.volumeButton3');
const volumeButton4 =document.querySelector('.volumeButton4');
const volumeButton5 =document.querySelector('.volumeButton5');

const play1 = () => {
    audio1.play();
};

button1.addEventListener('click', () => {
    play1();
});

const play2 = () => {
    audio2.play();
};

button2.addEventListener('click', () => {
    play2();
});

const play3 = () => {
    audio3.play();
};

button3.addEventListener('click', () => {
    play3();
});

const play4 = () => {
    audio4.play();
};

button4.addEventListener('click', () => {
    play4();
});

const play5 = () => {
    audio5.play();
};

button5.addEventListener('click', () => {
    play5();
});

const play6 = () => {
    audio6.play();
};

button6.addEventListener('click', () => {
    play6();
});

stop.addEventListener('click', () => {
    audio1.pause();
    audio1.currentTime = 0;
    audio2.pause();
    audio2.currentTime = 0;
    audio3.pause();
    audio3.currentTime = 0;
    audio4.pause();
    audio4.currentTime = 0;
    audio5.pause();
    audio5.currentTime = 0;
    audio6.pause();
    audio6.currentTime = 0;
});
/// Play or pasue using keyboard

const keyPress = document.addEventListener('keydown', (e) => {
    if (event.key === "a") {
        play1();
    } else if (event.key === "s") {
        play2();
    } else if (event.key === "d") {
        play3();
    } else if (event.key === "f") {
        play4();
    } else if (event.key === "g") {
        play5();
    } else if (event.key === "h") {
        play6();
    }
});
/// Volume

volumeButton1.addEventListener('click', () => {
    audio1.volume = 0.2;
    audio2.volume = 0.2;
    audio3.volume = 0.2;
    audio4.volume = 0.2;
    audio5.volume = 0.2;
});

volumeButton2.addEventListener('click', () => {
    audio1.volume = 0.4;
    audio2.volume = 0.4;
    audio3.volume = 0.4;
    audio4.volume = 0.4;
    audio5.volume = 0.4;
});

volumeButton3.addEventListener('click', () => {
    audio1.volume = 0.6;
    audio2.volume = 0.6;
    audio3.volume = 0.6;
    audio4.volume = 0.6;
    audio5.volume = 0.6;
});

volumeButton4.addEventListener('click', () => {
    audio1.volume = 0.8;
    audio2.volume = 0.8;
    audio3.volume = 0.8;
    audio4.volume = 0.8;
    audio5.volume = 0.8;
});

volumeButton5.addEventListener('click', () => {
    audio1.volume = 1;
    audio2.volume = 1;
    audio3.volume = 1;
    audio4.volume = 1;
    audio5.volume = 1;
});