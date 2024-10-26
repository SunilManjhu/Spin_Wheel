// Array of directions with names and corresponding rotation angles
const directions = [
  { name: "right", rotation: 0 },
  { name: "down", rotation: 90 },
  { name: "left", rotation: 180 },
  { name: "up", rotation: 270 }
];

function spinArrow() {
  const spins = 4;
  const randomDirection = directions[Math.floor(Math.random() * directions.length)];
  const finalRotation = (spins * 360) + randomDirection.rotation;

  document.getElementById("arrow").style.transform = `rotate(${finalRotation}deg)`;

  setTimeout(() => {
    document.getElementById("result").textContent = `The arrow is pointing: ${randomDirection.name}`;
  }, 2000);
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");
}
