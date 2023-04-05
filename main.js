///////////////////////////////////////
// Reveal sections
const allSections = document.querySelectorAll(".section");
const heroContent = document.querySelector(".hero-content");
const landingPageImage = document.querySelector(".landing-page-image-section");
const slideRightHidden = document.querySelector(".slideRight--hidden");
const slideLeftHidden = document.querySelector(".slideLeft--hidden");
const slideRight = document.querySelector(".slideRight");

// reveal section animation
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
