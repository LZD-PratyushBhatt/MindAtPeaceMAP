const signBoard = document.querySelector(".carousel-hide");
const logo = document.querySelector("#logout-btn");
const loginNavs = document.querySelectorAll(".login-nav");
const setupUI = (user) => {
  if (user) {
    if (loginNavs.length != 0)
      loginNavs.forEach((nav) => {
        nav.style.display = "block";
      });
    if (signBoard != null) signBoard.style.display = "none";
    if (logo != null) logo.style.display = "block";
  } else {
    if (loginNavs != null)
      loginNavs.forEach((nav) => {
        nav.style.display = "none";
      });
    if (signBoard != null) signBoard.style.display = "block";
    if (logo != null) logo.style.display = "none";
  }
};
