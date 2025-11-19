
// Run when the page loads and whenever the window is resized
// window.addEventListener('load', autoScaleIframes);

// Run all scripts when the page is fully loaded
window.addEventListener('load', function() {
  autoScaleIframes();
  initGradientBoxes();
});
window.addEventListener('resize', autoScaleIframes);



// Gradient Box
// --- Gradient Box Effect ---

function initGradientBoxes() {
  // Debug: Check if this function is running
  // console.log("initGradientBoxes: Searching for boxes...");

  const gradientBoxes = document.querySelectorAll(".gradient-box");
  // const gradientBoxes = document.querySelectorAll(".btn-outline-hero");

  // Debug: Check if we found any boxes
  // console.log("initGradientBoxes: Found " + gradientBoxes.length + " boxes.");

  gradientBoxes.forEach(box => {
    box.addEventListener("mousemove", function(e) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Debug: Check if the mouse event is firing and coordinates are calculated
      // console.log("Mousemove -- X: " + x + "px, Y: " + y + "px");  

      e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
      e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}