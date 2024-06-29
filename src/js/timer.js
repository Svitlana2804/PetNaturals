
document.addEventListener("DOMContentLoaded", function () {
  
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.addedNodes.length > 0) {
        let countdownElement = document.getElementById("countdown");
        if (countdownElement) {
          observer.disconnect();
          startCountdown(countdownElement);
        }
      }
    });
  });


  observer.observe(document.body, { childList: true, subtree: true });

  function startCountdown(countdownElement) {
    let countdownTime = 2 * 60 * 60 * 1000;

    function updateCountdown() {
      let hours = Math.floor(
        (countdownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      countdownElement.innerHTML = `${hours}:${minutes}:${seconds}`;

      if (countdownTime > 0) {
        countdownTime -= 1000;
      } else {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Час вийшов!";
      }
    }

    let countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
  }
});
