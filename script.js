const questions = [
  {
    text: "Do you love me?",
    yes: "Yes",
    no: "No..",
    secret: "One out of the many reasons i love you. You shine like the brightest star in the nightsky and help guide souls to need help or comfort."
  },
  {
    meter: true
  },
  {
    text: "Would maybe..possibly answer my next question for me?ꉂ(˵˃ ᗜ ˂˵)",
    yes: "Yes",
    no: "No..",
    secret: "Another out of many of the reasons I love you. You're such a beautiful and radient soul. I wish that we keep meeting in our different lifetimes."
  },
  {
    text: "Will you be my Valentine...?",
    yes: "Yes!",
    no: "No"
  }
];

let current = 0;
let lovePercent = 0;

const questionEl = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const secretEl = document.getElementById("secret");
const meter = document.getElementById("meter");
const fill = document.querySelector(".fill");
const meterMessage = document.getElementById("meter-message");

function loadQuestion() {
  secretEl.textContent = "";
  meter.classList.add("hidden");

  if (questions[current].meter) {
    meter.classList.remove("hidden");
    increaseLove();
    return;
  }

  questionEl.textContent = questions[current].text;
  yesBtn.textContent = questions[current].yes;
  noBtn.textContent = questions[current].no;
}

yesBtn.onclick = () => {
  if (questions[current].secret) {
    secretEl.textContent = questions[current].secret;
  }
  current++;
  if (current >= questions.length) {
    document.querySelector(".card").classList.add("hidden");
    document.getElementById("final").classList.remove("hidden");
  } else {
    loadQuestion();
  }
};

noBtn.onmouseover = () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
};

function increaseLove() {
  const interval = setInterval(() => {
    lovePercent += Math.floor(Math.random() * 200);
    fill.style.width = Math.min(lovePercent / 50, 100) + "%";

    if (lovePercent > 5000) {
      meterMessage.textContent = "WOOOOW You love me that much? (๑>◡<๑)";
    } else if (lovePercent > 1000) {
      meterMessage.textContent = "I am the evermost greatful for your love and caring.";
    } else {
      meterMessage.textContent = "You forever dazzle me my star";
    }

    if (lovePercent > 6000) clearInterval(interval);
  }, 100);
}

function nextQuestion() {
  current++;
  loadQuestion();
}

/* Floating emojis */
const emojis = ['❤︎','ꉂ(˵˃ ᗜ ˂˵)','۶ৎ','💗','❀','🧸','🪼'];
const container = document.getElementById("floating-container");

setInterval(() => {
  const span = document.createElement("span");
  span.className = "floating";
  span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.fontSize = Math.random() * 20 + 15 + "px";
  container.appendChild(span);
  setTimeout(() => span.remove(), 15000);
}, 500);

/* Music */
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
let playing = false;

music.volume = 0.5;

musicBtn.onclick = () => {
  if (!playing) {
    music.play();
    musicBtn.textContent = "🔇 Stop Music";
  } else {
    music.pause();
    musicBtn.textContent = "🎵 Play Music";
  }
  playing = !playing;
};

loadQuestion();
