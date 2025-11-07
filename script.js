function changeMessage() {
  const message = document.getElementById("message").innerText = "You just clicked the button on my website!";
}
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {backToTop.classList.add("show");} else {backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
