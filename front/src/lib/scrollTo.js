export const getScrollTop = () => {
  if (!document.body) return 0;
  const scrollTop = document.documentElement
    ? document.documentElement.scrollTop || document.body.scrollTop
    : document.body.scrollTop;
  return scrollTop;
};
export const getScrollBottom = () => {
  if (!document.body) return 0;
  const { scrollHeight } = document.body;
  const { innerHeight } = window;
  const scrollTop = getScrollTop();
  return scrollHeight - innerHeight - scrollTop;
};

export function position(elemId) {
  let elem = document.getElementById(elemId);
  let left = 0,
    top = 0;
  do {
    left += elem.offsetLeft;
    top += elem.offsetTop;
  } while ((elem = elem.offsetParent));

  return [left, top];
}

const scrollToElem = (elementY, duration) => {
  let startingY = window.pageYOffset;
  let diff = elementY - startingY;
  let start;

  // Bootstrap our animation - it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    // Elapsed milliseconds since start of scrolling.
    let time = timestamp - start;
    // Get percent of completion in range [0, 1].
    let percent = Math.min(time / duration, 1);

    window.scrollTo(0, startingY + diff * percent);

    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
};

const smoothScrollTo = (elemId, duration = 1000) => {
  scrollToElem(position(elemId)[1], duration);
};

export default smoothScrollTo;
