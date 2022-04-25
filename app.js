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
  "fantastic",
  "golden",
  "lovely",
];

const getRandNumber = (array) => {
  const randomNum = Math.floor(Math.random() * array.length);
  return array[randomNum];
};

//set random word
setInterval(
  (app.displayWord = () => {
    const word = document.querySelector(".randomWord");
    word.innerText = getRandNumber(words);
  }),
  1500
);

//display current day
app.displayDay = () => {
  const day = document.querySelector(".weekDay");
  day.innerText = new Date().toLocaleString("default", { weekday: "long" });
};

//mobile menu functionality
app.mobileMenu = () => {
  const navList = document.querySelector(".navList");
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

//animations created after watching youtube tutorial from Wes Bos
const sliderImages = document.querySelectorAll(".slideIn");

app.slideIn = (e) => {
  sliderImages.forEach((image) => {
    const slideInAt = window.scrollY + window.innerHeight - image.height / 2;
    const imageBottom = image.offsetTop + image.height;
    const ifHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (ifHalfShown && isNotScrolledPast) {
      image.classList.add("active");
    } else {
      image.classList.remove("active");
    }
  });
};

//clear form after submit, as per formspree.io documentation
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

app.init = () => {
  window.addEventListener("scroll", app.slideIn);
  app.displayWord();
  app.displayDay();
  app.mobileMenu();
};

app.init();
