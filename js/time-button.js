document.getElementById("show-time-button").addEventListener("click", () => {
  const currentTime = new Date().toLocaleTimeString();
  document.getElementById("time-display").style.opacity = 1;
  document.getElementById("time-display").textContent = `Current time: ${currentTime}`;
});