document.addEventListener("DOMContentLoaded", function () {
<<<<<<< HEAD
  const todayDateElement = document.getElementById("today");
  if (todayDateElement) {
    const today = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    const todayFormatted = today.toLocaleDateString("uk-UA", options);
    todayDateElement.innerText = `Order date: ${todayFormatted}`;
  }
=======
  const todayDateElement = document.querySelector("#today_date");
  console.log(todayDateElement);
  const today = new Date();

  const options = { day: "numeric", month: "long", year: "numeric" };
  const todayFormatted = today.toLocaleDateString("uk-UA", options);

  todayDateElement.innerText = `Order date: ${todayFormatted}`;

>>>>>>> e350028f715f49fba83ea629f70b7571a80dd3a4
});
