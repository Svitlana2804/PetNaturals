document.addEventListener("DOMContentLoaded", function () {
  // Встановлюємо час зворотного відліку в мілісекундах (2 години = 2 * 60 * 60 * 1000 мс)
  let countdownTime = 2 * 60 * 60 * 1000;
  let countdownElement = document.getElementById("countdown");

  function updateCountdown() {
    let hours = Math.floor(
      (countdownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    countdown.innerHTML = `${hours}:${minutes}:${seconds}`;

    if (countdownTime > 0) {
      countdownTime -= 1000;
    } else {
      clearInterval(countdownInterval);
      countdown.innerHTML = "Час вийшов!";
    }
  }
  let countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
});
