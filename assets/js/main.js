/* Hero slideshow */
(function() {
  const slides = document.querySelectorAll('.hero__slide');
  const dots = document.querySelectorAll('.hero__dot');
  let current = 0;
  let timer;

  function show(n) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    current = n;
    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
  }

  function next() {
    show((current + 1) % slides.length);
  }

  function startTimer() {
    timer = setInterval(next, 5000);
  }

  dots.forEach((d, i) => {
    d.addEventListener('click', () => { clearInterval(timer); show(i); startTimer(); });
  });

  if (slides.length) { show(0); startTimer(); }
})();

/* Mobile nav toggle */
(function() {
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }
})();
