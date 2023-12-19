// DARK MODE

document.querySelector(".toggle-btn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    document.querySelector(".icon").classList.remove("fa-moon");
    document.querySelector(".icon").classList.add("fa-sun");
  } else {
    document.querySelector(".icon").classList.remove("fa-sun");
    document.querySelector(".icon").classList.add("fa-moon");
  }
});

document.querySelector(".mode-btn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    document.querySelector(".icon").classList.remove("fa-moon");
    document.querySelector(".icon").classList.add("fa-sun");
  } else {
    document.querySelector(".icon").classList.remove("fa-sun");
    document.querySelector(".icon").classList.add("fa-moon");
  }
});

// TOGGLE

function openNavbar() {
  document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.top = "-100%";
  document.getElementById("main").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);
document.getElementById("main").addEventListener("click", closeNavbar);


