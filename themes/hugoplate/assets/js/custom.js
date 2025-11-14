// assets/js/iframe-scaler.js

function autoScaleIframes() {
  const containers = document.querySelectorAll('.zoom-iframe-auto');
  if (!containers.length) return;

  containers.forEach(container => {
    const nativeWidth = parseFloat(container.dataset.nativeWidth);
    const nativeHeight = parseFloat(container.dataset.nativeHeight);
    const availableWidth = container.clientWidth;
    const iframe = container.querySelector('iframe');
    
    // The p-2 class adds 0.5rem (8px) of padding on each side
    const padding = 0;

    if (availableWidth < nativeWidth) {
      const scale = availableWidth / nativeWidth;
      iframe.style.transform = `scale(${scale})`;
      const scaledHeight = nativeHeight * scale;
      container.style.height = `${scaledHeight + padding}px`;
    } else {
      // If there's enough space, use the native size
      iframe.style.transform = 'scale(1)';
      container.style.height = `${nativeHeight + padding}px`;
    }
  });
}

// Run when the page loads and whenever the window is resized
window.addEventListener('load', autoScaleIframes);
window.addEventListener('resize', autoScaleIframes);
