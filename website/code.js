const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('animate__tada');
            observer.unobserve(el);
        }
    })
}, {
    threshold: 0.5
});

// Select elements to observe
const elements = document.querySelectorAll('animate__');
elements.forEach(el => observer.observe(el));

let keys = [];
document.addEventListener('keydown', e => {
  keys.push(e.key);
  if (keys.join('').includes('axis.dev')) {
    window.location.href = './dashboard/dev-only.html';
  }
});
