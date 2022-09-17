export default function loader() {
  // LOADER
  const loader = document.querySelector(".loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 1500);
  }, 2000);
}
