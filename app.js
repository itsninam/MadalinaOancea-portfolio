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
  // "magnificent",
  "fantastic",
  "golden",
  "lovely",
];

const getRandNumber = (array) => {
  const randomNum = Math.floor(Math.random() * array.length);
  return array[randomNum];
};

const navList = document.querySelector(".navList");

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

app.mobileMenu = () => {
  const button = document.querySelector(".mobileMenu");
  button.addEventListener("click", () => {
    navList.classList.toggle("hide");
    button.classList.toggle("whiteBtn");
  });
  navList.addEventListener("click", () => {
    navList.classList.add("hide");
    button.classList.remove("whiteBtn");
  });
};

app.init = () => {
  app.displayWord();
  app.displayDay();
  app.mobileMenu();
};

app.init();
