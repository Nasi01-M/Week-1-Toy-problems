function checkSpeed(speed) {
    // Check if speed is below limit
    if (speed < 70) {
      console.log("Ok"); // Log to console for debugging/record keeping
      alert("You're driving within the speed limit!"); // Alert user visually
      return;
    }
  
    // Calculate number of demerit points
    let points = Math.floor((speed - 70) / 5);
  
    // Check for license suspension
    if (points > 12) {
      console.log("License suspended!"); // Log to console for debugging
      alert("Your license is suspended! Please pull over immediately."); // Urgent alert for user
    } else {
      console.log(`Points: ${points}`); // Log points for record keeping
      alert(`You've earned ${points} demerit points for exceeding the speed limit. Drive carefully!`); // Informative alert for user
    }
  }
  
  // Read speed from user input or define a test value
  let speed = prompt("Enter the car's speed (km/h):");
  
  // Convert string to number if using prompt
  if (speed) {
    speed = Number(speed);
  }
  
  // Call the function with speed
  checkSpeed(speed);
  