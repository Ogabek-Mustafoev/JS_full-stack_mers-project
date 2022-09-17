export default function accordion() {
  // ACCORDION
  const accordion = document.querySelectorAll(".accordion"),
    panels = document.querySelectorAll(".panel");

  function closeAcc() {
    accordion.forEach((acc) => acc.classList.remove("active"));
    panels.forEach((panel) => (panel.style.maxHeight = null));
  }
  function openAcc(i) {
    accordion[i].classList.add("active");
    panels[i].style.maxHeight = panels[i].scrollHeight + "px";
  }
  closeAcc();
  accordion.forEach((acc, i) => {
    acc.addEventListener("click", () => {
      closeAcc();
      openAcc(i);
    });
  });
  window.addEventListener("click", (e) => {
    console.log(e.target);
    if (!e.target.classList.contains("accordion")) {
      closeAcc();
    }
  });
}
