export function getCurrentDate() {
  // Get the current date
  const currentDate = new Date();

  // Define an array of month names
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Extract components
  const currentDay = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  const currentMonth = monthNames[currentDate.getMonth()];
  const currentDateOfMonth = currentDate.getDate();
  const currentYear = currentDate.getFullYear();

  // Display the result
  return `${currentDay}, ${currentMonth}, ${currentDateOfMonth}, ${currentYear}`;

  // Call the function to display the current date
}
