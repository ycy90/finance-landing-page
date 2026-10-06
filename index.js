const toggle = document.getElementById('toggle');
const menu = document.querySelector(".navbar__items");

function toggleHamburger() {
  if(menu.classList.contains("mobile--hidden")) {
menu.classList.remove("mobile--hidden");
  } else {
menu.classList.add("mobile--hidden");
  }
}


toggle.addEventListener("click", toggleHamburger);
