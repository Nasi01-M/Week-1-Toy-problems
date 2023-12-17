function getGrade() {
    // Prompt user for grade input
    let mark = prompt("Enter the student's mark (0-100):");
  
    // Validate input
    if (isNaN(mark) || mark < 0 || mark > 100) {
      alert("Invalid mark! Please enter a number between 0 and 100.");
      return;
    }
  
    // Convert string to number
    mark = Number(mark);
  
    // Determine grade based on mark
    let grade;
    if (mark >= 80) {
      grade = "A";
    } else if (mark >= 60) {
      grade = "B";
    } else if (mark >= 50) {
      grade = "C";
    } else if (mark >= 40) {
      grade = "D";
    } else {
      grade = "E";
    }
  
    // Display grade. The output of console.log is not directly visible to the user without accessing the developer toolsthats why i have used 'alert'
    alert(`The student's grade is: ${grade}`);

    // Display the grade with console.log for the developer tools
console.log(`The student's grade is: ${grade}`);
  }
  
  // Call the function
  getGrade();
  