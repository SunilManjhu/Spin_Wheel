// Array of directions with names and corresponding rotation angles
const directions = [
    { name: "right", rotation: 0 },
    { name: "down", rotation: 90 },
    { name: "left", rotation: 180 },
    { name: "up", rotation: 270 }
  ];
  
  function spinArrow() {
    // Number of full spins before stopping at the final direction
    const spins = 4;
    
    // Choose a random direction
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    
    // Calculate the final rotation (multiple spins plus target direction)
    const finalRotation = (spins * 360) + randomDirection.rotation;
    
    // Apply the rotation to the arrow
    document.getElementById("arrow").style.transform = `rotate(${finalRotation}deg)`;
    
    // Update the result after the transition ends
    setTimeout(() => {
      document.getElementById("result").textContent = `The arrow is pointing: ${randomDirection.name}`;
    }, 2000); // Matches the CSS transition duration
  }
  