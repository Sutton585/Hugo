
// Run when the page loads and whenever the window is resized
// window.addEventListener('load', autoScaleIframes);

// Run all scripts when the page is fully loaded
window.addEventListener('load', function() {
  autoScaleIframes();
  initGradientBoxes();
});
window.addEventListener('resize', autoScaleIframes);