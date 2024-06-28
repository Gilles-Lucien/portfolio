export function smoothScroll(e, href, duration = 3000) {
  e.preventDefault();

  const targetElement = document.querySelector(href);

  const topOffset = targetElement.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = topOffset - startPosition;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(
      0,
      customEaseInOut(progress, startPosition, distance, duration)
    );
    if (progress < duration) window.requestAnimationFrame(step);
  }


function customEaseInOut(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t*t*t + 2) + b;
  };

}
