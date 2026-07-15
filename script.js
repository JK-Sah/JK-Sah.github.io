// ===== Theme toggle (persists in localStorage, respects OS preference) =====
(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme", saved || (prefersDark ? "dark" : "light"));

  const toggle = document.getElementById("themeToggle");
  toggle?.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
})();

// ===== Mobile nav =====
(function () {
  const burger = document.getElementById("burger");
  const links = document.getElementById("navLinks");
  burger?.addEventListener("click", () => links.classList.toggle("is-open"));
  links?.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("is-open"))
  );
})();

// ===== Shrink/border nav on scroll =====
(function () {
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

// ===== Reveal sections + active nav link via IntersectionObserver =====
(function () {
  const sections = document.querySelectorAll("main .section");
  const navLinks = document.querySelectorAll('#navLinks a[href^="#"]');

  const revealer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          revealer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  sections.forEach((s) => revealer.observe(s));

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const id = e.target.getAttribute("id");
          navLinks.forEach((a) =>
            a.classList.toggle("is-active", a.getAttribute("href") === "#" + id)
          );
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));
})();

// ===== Placeholder social links: gently remind instead of navigating =====
(function () {
  document.querySelectorAll("a[data-placeholder]").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      alert(
        `Add your ${a.dataset.placeholder} URL in index.html (search for data-placeholder="${a.dataset.placeholder}").`
      );
    });
  });
})();

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();
