// Simple smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Header background change on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.95)";
    header.style.padding = "10px 0";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)";
    header.style.padding = "15px 0";
  }
});

// Form validation and submission handling
const form = document.querySelector(".contact-form form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Simple form validation
  const nameInput = form.querySelector('input[type="text"]');
  const emailInput = form.querySelector('input[type="email"]');
  const messageInput = form.querySelector("textarea");

  let isValid = true;

  if (!nameInput.value.trim()) {
    highlightError(nameInput);
    isValid = false;
  }

  if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
    highlightError(emailInput);
    isValid = false;
  }

  if (!messageInput.value.trim()) {
    highlightError(messageInput);
    isValid = false;
  }

  if (isValid) {
    // In a real implementation, you would send the form data to a server here
    alert("Thank you for your message! We will get back to you soon.");
    form.reset();
  }
});

function highlightError(input) {
  input.style.borderColor = "#ff3860";
  input.style.boxShadow = "0 0 0 3px rgba(255, 56, 96, 0.2)";

  // Remove error highlighting after 3 seconds
  setTimeout(() => {
    input.style.borderColor = "#e6e6e6";
    input.style.boxShadow = "none";
  }, 3000);
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Add focus effects to form inputs
const formInputs = document.querySelectorAll(
  ".contact-form input, .contact-form textarea"
);

formInputs.forEach((input) => {
  input.addEventListener("focus", function () {
    this.parentElement.classList.add("focused");
  });

  input.addEventListener("blur", function () {
    this.parentElement.classList.remove("focused");
  });
});

// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-btn");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");
const body = document.body;

function openMobileNav() {
  mobileNav.classList.add("active");
  overlay.classList.add("active");
  body.style.overflow = "hidden";
}

function closeMobileNav() {
  mobileNav.classList.remove("active");
  overlay.classList.remove("active");
  body.style.overflow = "auto";
}

hamburger.addEventListener("click", openMobileNav);
closeBtn.addEventListener("click", closeMobileNav);
overlay.addEventListener("click", closeMobileNav);

// Close mobile nav when clicking on links
const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a");
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", closeMobileNav);
});

// Header background change on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)";
    header.style.padding = "10px 0";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)";
    header.style.padding = "15px 0";
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Calculate the position to scroll to, accounting for the header height
      const headerHeight = document.querySelector("header").offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

/* Scroll Animations */
// ===== JavaScript =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      entry.target.style.transitionDelay = `${delay}ms`;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // animate once
    }
  });
});

document.querySelectorAll(".animate-on-scroll").forEach((el) => {
  observer.observe(el);
});
