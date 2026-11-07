const frame = document.querySelector('.frame');
const motion = matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)');
if (frame) {
  frame.addEventListener('pointermove', event => {
    if (!motion.matches || event.pointerType === 'touch') return;
    const bounds = frame.getBoundingClientRect();
    frame.style.setProperty('--x', `${(0.5 - (event.clientX - bounds.left) / bounds.width) * 12}px`);
    frame.style.setProperty('--y', `${(0.5 - (event.clientY - bounds.top) / bounds.height) * 12}px`);
  });
  frame.addEventListener('pointerleave', () => {
    frame.style.removeProperty('--x');
    frame.style.removeProperty('--y');
  });
}
