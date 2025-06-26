(function () {
  function convertOpacityHex(css) {
    return css.replace(/#([0-9a-fA-F]{3,6})\.(\d+)/g, (_, hex, opacity) => {
      let alpha = parseFloat('0.' + opacity);
      if (alpha > 1) alpha = 1;

      if (hex.length === 3) {
        hex = hex.split('').map(c => c + c).join('');
      }

      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);

      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    });
  }

  function processAllStyleTags() {
    const styleTags = document.querySelectorAll('style');

    styleTags.forEach(styleTag => {
      if (styleTag.dataset.hexOpacityProcessed) return;

      const css = styleTag.textContent;
      const converted = convertOpacityHex(css);
      styleTag.textContent = converted;
      styleTag.dataset.hexOpacityProcessed = "true";
    });
  }

  function processInlineStyles() {
    const elements = document.querySelectorAll('[style]');
    elements.forEach(el => {
      const style = el.getAttribute('style');
      const converted = convertOpacityHex(style);
      el.setAttribute('style', converted);
    });
  }

  function init() {
    processAllStyleTags();
    processInlineStyles();

    const observer = new MutationObserver(() => {
      processAllStyleTags();
      processInlineStyles();
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
