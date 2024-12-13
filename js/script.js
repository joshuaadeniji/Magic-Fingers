// Navigation -------------------------------------

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    // navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.classList.toggle('active');
  }

// Testimonial ------------------------------------

const scrollContainer = document.querySelector('.testimonial-container');

let isDown = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener('mousedown', (e) => {
  isDown = true;
  scrollContainer.classList.add('active');
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
  scrollContainer.style.cursor = "grabbing";
});

scrollContainer.addEventListener('mouseleave', () => {
  isDown = false;
  scrollContainer.classList.remove('active');
  scrollContainer.style.cursor = "grab";
});

scrollContainer.addEventListener('mouseup', () => {
  isDown = false;
  scrollContainer.classList.remove('active');
  scrollContainer.style.cursor = "grab";
});

scrollContainer.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  const walk = x - startX; // Distance moved
  scrollContainer.scrollLeft = scrollLeft - walk;
});
