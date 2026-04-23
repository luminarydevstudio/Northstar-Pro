/* ─── THEME ──────────────────────────────────────────────────────────────── */
const root      = document.documentElement;
const themeBtn  = document.querySelector(".theme-btn");
const THEME_KEY = "ns-theme";

function applyTheme(theme) {
  root.dataset.theme = theme;
}

function resolveTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

applyTheme(resolveTheme());

themeBtn?.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
});

/* ─── HEADER SCROLL EFFECT ───────────────────────────────────────────────── */
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  header?.classList.toggle("scrolled", window.scrollY > 24);
}, { passive: true });

/* ─── MOBILE MENU ────────────────────────────────────────────────────────── */
const menuBtn   = document.querySelector(".menu-btn");
const closeBtn  = document.querySelector(".mobile-nav__close");
const mobileNav = document.getElementById("mobile-nav");

function openMenu() {
  mobileNav?.classList.add("open");
  mobileNav?.setAttribute("aria-hidden", "false");
  menuBtn?.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  mobileNav?.classList.remove("open");
  mobileNav?.setAttribute("aria-hidden", "true");
  menuBtn?.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

menuBtn?.addEventListener("click", openMenu);
closeBtn?.addEventListener("click", closeMenu);

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileNav?.classList.contains("open")) closeMenu();
});

/* ─── LEGAL MODALS (Privacy / Terms) ─────────────────────────────────────── */
const modalTriggers = document.querySelectorAll("[data-modal]");
const modals        = document.querySelectorAll(".modal");
let lastFocused     = null;

function openModal(id) {
  const modal = document.getElementById("modal-" + id);
  if (!modal) return;
  lastFocused = document.activeElement;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.querySelector(".modal__close")?.focus();
}

function closeAllModals() {
  modals.forEach((m) => {
    m.classList.remove("open");
    m.setAttribute("aria-hidden", "true");
  });
  document.body.classList.remove("modal-open");
  lastFocused?.focus?.();
}

modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    openModal(trigger.dataset.modal);
  });
});

modals.forEach((modal) => {
  modal.querySelectorAll("[data-close]").forEach((el) => {
    el.addEventListener("click", closeAllModals);
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && document.body.classList.contains("modal-open")) {
    closeAllModals();
  }
});

/* ─── SCROLL ANIMATIONS ──────────────────────────────────────────────────── */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
