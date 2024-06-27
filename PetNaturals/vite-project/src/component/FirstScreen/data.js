document.addEventListener("DOMContentLoaded", function () {
  const todayDateElement = document.getElementById("today_date");
  const today = new Date();

  const options = { day: "numeric", month: "long", year: "numeric" };
  const todayFormatted = today.toLocaleDateString("uk-UA", options);

  todayDateElement.innerText = `Order date: ${todayFormatted}`;
});
