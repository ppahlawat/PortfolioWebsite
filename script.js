// Shared behaviour for all pages

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
    });

    // close menu after a link is tapped (mobile)
    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => links.classList.remove("open"));
    });
  }

  // Highlight the current page in the nav
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });
});
