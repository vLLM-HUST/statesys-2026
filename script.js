const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function setNavigation(isOpen) {
  nav.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
}

navToggle.addEventListener("click", () => {
  setNavigation(!nav.classList.contains("is-open"));
});

nav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    setNavigation(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("is-open")) {
    setNavigation(false);
    navToggle.focus();
  }
});

document.addEventListener("click", (event) => {
  if (!header.contains(event.target)) setNavigation(false);
});

window.matchMedia("(min-width: 861px)").addEventListener("change", (event) => {
  if (event.matches) setNavigation(false);
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
