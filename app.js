const app = {};

const words = [
  "delightful",
  "bright",
  "breezy",
  "superb",
  "beautiful",
  "clear",
  "splendid",
  "glorious",
  "happy",
  "brilliant",
  "wonderful",
  "blissful",
  "radiant",
  "joyful",
  "exciting",
  "magnificent",
];

const getRandNumber = (array) => {
  const randomNum = Math.floor(Math.random() * array.length);
  return array[randomNum];
};

console.log(getRandNumber(words));

setInterval(
  (app.displayWord = () => {
    const word = document.querySelector(".randomWord");
    word.innerText = getRandNumber(words);
  }),
  1500
);

app.displayDay = () => {
  const day = document.querySelector(".weekDay");
  day.innerText = new Date().toLocaleString("default", { weekday: "long" });
};

app.init = () => {
  app.displayWord();
  app.displayDay();
};

app.init();
