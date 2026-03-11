// CTA button alert

document.getElementById("ctaBtn").addEventListener("click", () => {
  alert("Consultation booking coming soon!");
});

// Counter animation

const counters = document.querySelectorAll(".stat-number");

counters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");

    const current = +counter.innerText;

    const increment = target / 100;

    if (current < target) {
      counter.innerText = (current + increment).toFixed(2);

      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// Our story button

const storyBtn = document.getElementById("storyBtn");

if (storyBtn) {
  storyBtn.addEventListener("click", () => {
    alert("Strategy call booking coming soon!");
  });
}
