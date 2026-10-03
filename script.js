const heartTypes = [
    "❤️",
    "💖",
    "💕",
    "💗",
    "💓",
    "💘",
    "💝"
];

const balloonColors = [
    "#ff0055",
    "#ff0080",
    "#7700ff",
    "#00eaff",
    "#00ff88",
    "#ffea00"
];


// KALP OLUŞTUR

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
        heartTypes[
            Math.floor(Math.random() * heartTypes.length)
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (20 + Math.random() * 45) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    document
        .getElementById("hearts")
        .appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}


// BALON OLUŞTUR

function createBalloon() {

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    const color =
        balloonColors[
            Math.floor(Math.random() * balloonColors.length)
        ];

    balloon.style.background = color;
    balloon.style.color = color;

    balloon.style.left =
        Math.random() * 100 + "vw";

    balloon.style.animationDuration =
        (8 + Math.random() * 7) + "s";

    // Balon ipi
    const string = document.createElement("div");

    string.className = "string";

    balloon.appendChild(string);

    document
        .getElementById("balloons")
        .appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 16000);
}


// SÜREKLİ KALP

setInterval(createHeart, 300);


// SÜREKLİ BALON

setInterval(createBalloon, 1200);


// BAŞLANGIÇTA BİRAZ FAZLA KALP

for (let i = 0; i < 25; i++) {

    setTimeout(
        createHeart,
        i * 100
    );
}


// BAŞLANGIÇTA BİRAZ BALON

for (let i = 0; i < 8; i++) {

    setTimeout(
        createBalloon,
        i * 500
    );
}