// Directions with corresponding rotation angles
const directions = [
  { name: "right", rotation: 0 },
  { name: "down", rotation: 90 },
  { name: "left", rotation: 180 },
  { name: "up", rotation: 270 }
];

let spinCounter = 0; // Variable to track the number of spins

/**
* Spins the arrow element to a random direction with a fixed number of rotations.
* Each spin starts from a neutral position to maintain a consistent effect.
*/
function spinArrow() {
  spinCounter++; // Increment spin count
  document.getElementById("spinCount").textContent = `Spin Count: ${spinCounter}`; // Update display

  const spins = 4; // Fixed number of full rotations
  const arrowElement = document.getElementById("arrow");

  // Reset rotation to 0 to ensure consistent starting point
  arrowElement.style.transition = "none"; // Disable transition for instant reset
  arrowElement.style.transform = "rotate(0deg)"; // Reset rotation

  // Brief delay to apply the reset visually
  setTimeout(() => {
      // Select a random direction
      const randomDirection = directions[Math.floor(Math.random() * directions.length)];

      // Calculate total rotation: full spins + direction angle
      const totalRotation = (spins * 360) + randomDirection.rotation;

      // Apply the calculated rotation with a smooth transition
      arrowElement.style.transition = "transform 2s ease"; // Enable transition
      arrowElement.style.transform = `rotate(${totalRotation}deg)`; // Apply rotation

      // Display the result after the spin
      setTimeout(() => {
          document.getElementById("result").textContent = `The arrow is pointing: ${randomDirection.name}`;
      }, 2000); // Delay matches transition duration
  }, 50); // Short delay for visual reset
}

/**
* Resets the game to its initial state.
* Clears the spin count and resets the arrow to its original position.
*/
function resetGame() {
  spinCounter = 0; // Reset spin counter
  document.getElementById("spinCount").textContent = `Spin Count: ${spinCounter}`; // Update display

  // Reset the arrow position
  const arrowElement = document.getElementById("arrow");
  arrowElement.style.transition = "none"; // Disable transition for instant reset
  arrowElement.style.transform = "rotate(0deg)"; // Reset rotation
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");
}