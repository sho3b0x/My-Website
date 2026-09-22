// Shane Morton — personal site
// Expand/shrink accordion used on writing.html.
// Each accordion item is a button (title bar) + a content panel.
// Clicking the button toggles the panel open/closed and animates
// its height so it visibly "expands out" instead of snapping.

document.addEventListener('DOMContentLoaded', function () {
  var headers = document.querySelectorAll('.accordion-header');

  headers.forEach(function (header) {
    header.addEventListener('click', function () {
      var panelId = header.getAttribute('aria-controls');
      var panel = document.getElementById(panelId);
      var isOpen = header.getAttribute('aria-expanded') === 'true';

      if (isOpen) {
        // collapse
        panel.style.maxHeight = panel.scrollHeight + 'px'; // set current height first
        requestAnimationFrame(function () {
          panel.style.maxHeight = '0px';
        });
        header.setAttribute('aria-expanded', 'false');
        header.classList.remove('is-open');
      } else {
        // expand
        header.setAttribute('aria-expanded', 'true');
        header.classList.add('is-open');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  // Keep open panels correctly sized if the window is resized
  // (e.g. text reflows to more/fewer lines on rotation).
  window.addEventListener('resize', function () {
    document.querySelectorAll('.accordion-header.is-open').forEach(function (header) {
      var panel = document.getElementById(header.getAttribute('aria-controls'));
      panel.style.maxHeight = panel.scrollHeight + 'px';
    });
  });
});
