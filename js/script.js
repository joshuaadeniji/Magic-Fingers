// Navigation -------------------------------------

window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  if (window.scrollY > 50) { // Change background after 50px of scrolling
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


function toggleMenu() {
  let header = document.querySelector(".header");
  // let nav = document.querySelector("nav");
  let navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');

  if (navLinks.classList.contains("active")) {
    header.classList.add("menu-open");
  } else {
    header.classList.remove("menu-open");
  }
}

// slide-up scroll animation handling

const animatedElements = document.querySelectorAll('.hidden');

function handleScroll() {
  animatedElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    if (isVisible) {
      element.classList.add('show');
    }
  });
}

window.addEventListener('scroll', handleScroll);
handleScroll();



// Testimonial ------------------------------------
/*
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".testimonial-container");
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener("mousedown", (e) => {
    isDown = true;
    container.classList.add("active");
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("mouseleave", () => {
    isDown = false;
    container.classList.remove("active");
  });

  container.addEventListener("mouseup", () => {
    isDown = false;
    container.classList.remove("active");
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    container.scrollLeft = scrollLeft - walk;
  });
});


*/
