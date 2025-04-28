let rocket = document.querySelector(".box6 img");
let box6 = document.querySelector(".box6");
let moveButton = document.getElementById("moveButton");

let distanceToMove = 0;
let rocketPosition = 0;
let animationFrameId;

function trackRocketPosition() {
  if (rocketPosition > distanceToMove) {
    cancelAnimationFrame(animationFrameId);
    return;
  }

  rocketPosition += 2; // adjust this speed (px/frame)

  // Move the rocket visually
  rocket.style.transform = `translate(-50%, -${rocketPosition}px)`;

  console.log('window', window.scrollY);
  
  // Scroll the window along with rocket
  window.scrollTo({
    top: window.scrollY - 2, // same amount as rocket
    behavior: "auto"
  });

  animationFrameId = requestAnimationFrame(trackRocketPosition);
}

function handleRocketClick() {
  // Get the position of box1 (top) relative to box6
  let box1 = document.querySelector(".box1");
  let box1Rect = box1.getBoundingClientRect();
  let box6Rect = box6.getBoundingClientRect();

  distanceToMove = box6Rect.top - box1Rect.top; // total distance to move rocket
  rocketPosition = 0; // reset rocket position

  // Start the animation
  animationFrameId = requestAnimationFrame(trackRocketPosition);
}

// Add event listener to button to trigger the rocket movement
moveButton.addEventListener("click", handleRocketClick);

window.onload = function() {
    window.scrollTo(0, document.body.scrollHeight);
  };
  