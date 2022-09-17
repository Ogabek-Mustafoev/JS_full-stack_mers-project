export default function tabs() {
  // TABS
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabContent = document.querySelectorAll(".tabcontent");

  function hideTabContent() {
    tabs.forEach((tab) => tab.classList.remove("tabheader__item_active"));
    tabContent.forEach((item) => (item.style.display = "none"));
  }
  function showTabContent(i = 0) {
    tabs[i].classList.add("tabheader__item_active");
    tabContent[i].style.display = "block";
  }
  hideTabContent();
  showTabContent();

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
      hideTabContent();
      showTabContent(i);
    });
  });
}
