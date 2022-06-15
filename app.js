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

//clear form after submit, as per formspree.io documentation
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

//see more/less project
app.seeMoreLess = () => {
  //target the projects container
  const projectsContainer = document.querySelector(".collapsed");
  //target the see more button
  const seeMore = document.querySelector(".seeMoreBtn");
  //target the see less button
  const seeLess = document.querySelector(".seeLessBtn");

  //when see more button is clicked, add the expanded class to hide the see more button and remove collapsed class to display all items
  seeMore.addEventListener("click", () => {
    projectsContainer.classList.remove("collapsed");
    projectsContainer.classList.add("expanded");
  });

  //when see less button is clicked, add collapsed class to hide items and remove expanded class to bring back the see more button
  seeLess.addEventListener("click", () => {
    projectsContainer.classList.add("collapsed");
    projectsContainer.classList.remove("expanded");
  });
};

app.projectsHover = () => {
  const projects = document.querySelectorAll("");
};

app.init = () => {
  window.addEventListener("scroll", app.slideIn);
  app.displayWord();
  app.displayDay();
  app.mobileMenu();
  app.seeMoreLess();
};

app.init();
