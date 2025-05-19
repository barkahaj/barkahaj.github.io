const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Optional: only animate once
    }
  });
}, {
  threshold: 0.3
});

// Observe all directionally hidden elements
document.querySelectorAll('.hidden-left, .hidden-right, .hidden-top, .hidden-bottom')
  .forEach(el => observer.observe(el));
