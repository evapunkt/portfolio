console.log("hello world");

document.getElementById("theme").addEventListener("click", themeChange);
const bodyE1 = document.getElementById("body");
const projectSection = document.getElementById("projects");

function themeChange() {
  console.log("button clicked");

  projectSection.classList.toggle("dark-theme");
}
