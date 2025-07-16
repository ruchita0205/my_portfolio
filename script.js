// Animate all sections on scroll (fade-in effect)
const sections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  sectionObserver.observe(section);
});

// Animate skill bars when #skills enters the viewport
const skillsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fills = document.querySelectorAll('.fill');
      fills.forEach(fill => {
        fill.style.width = fill.getAttribute('data-width');
      });
      skillsObserver.disconnect(); // run once
    }
  });
}, {
  threshold: 0.3
});

skillsObserver.observe(document.querySelector('#skills'));
