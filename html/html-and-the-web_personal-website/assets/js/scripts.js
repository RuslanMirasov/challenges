const refs = {
  header: document.querySelector(".header"),
  navigation: document.querySelector(".js-navigation"),
  burger: document.querySelector(".js-burger"),
};

// MENU FUNCTIONS
const menuOpen = () => {
  refs.navigation.classList.add("open");
  refs.burger.classList.add("open");
};

const menuClose = () => {
  refs.navigation.classList.remove("open");
  refs.burger.classList.remove("open");
};

const menuToggle = () => {
  refs.navigation.classList.contains("open") ? menuClose() : menuOpen();
};

// SCROLL TO BLOCK FUNCTION
const scrollToBlock = (e, target) => {
  e.preventDefault();
  const targetId = target.getAttribute("href");
  const targetSection = document.querySelector(targetId);
  const headerHeight = refs.header.offsetHeight;
  var elementPosition =
    targetSection.getBoundingClientRect().top +
    window.pageYOffset -
    headerHeight;
  window.scrollTo({
    top: elementPosition,
    behavior: "smooth",
  });
  menuClose();
};

refs.burger.addEventListener("click", menuToggle);

document.body.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("js-scrollto")) {
    scrollToBlock(e, target);
  }
});

window.addEventListener("scroll", () => {
  const scrollPosition = document.documentElement.scrollTop;
  if (scrollPosition > 0) {
    refs.header.classList.add("fix");
    return;
  }
  refs.header.classList.remove("fix");
});
