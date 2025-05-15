function animateCounter(el, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16); // 60 FPS
  const counter = setInterval(() => {
    start += increment;
    if (start >= target) {
      el.textContent = target;
      clearInterval(counter);
    } else {
      el.textContent = Math.floor(start);
    }
  }, 16);
}

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-target"));
          animateCounter(el, target);
          obs.unobserve(el);
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  counters.forEach((counter) => observer.observe(counter));
});

const header = document.getElementById("main-header");

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("main-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("bg-gray-900", "bg-opacity-90");
    } else {
      header.classList.remove("bg-gray-900", "bg-opacity-90");
    }
  });
});
