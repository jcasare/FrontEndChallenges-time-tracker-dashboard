  let dailyBtn = document.querySelectorAll(".profile-periods a")[0];
  let weeklyBtn = document.querySelectorAll(".profile-periods a")[1];
  let monthlyBtn = document.querySelectorAll(".profile-periods a")[2];
  let currentState = document.querySelectorAll(".category-container h2");
  let prevState = document.querySelectorAll(".sub-content p");
  let myLink = 'https://jcasare.github.io/timetracking-api/data.json';




  dailyBtn.classList.add("selected");

  dailyBtn.addEventListener('click', () => {
    getDailyReport();
    dailyBtn.classList.add("selected");
    weeklyBtn.classList.remove("selected");
    monthlyBtn.classList.remove("selected");

  })
  weeklyBtn.addEventListener('click', () => {
    getWeeklyReport();
    dailyBtn.classList.remove("selected");
    weeklyBtn.classList.add("selected");
    monthlyBtn.classList.remove("selected");
  })
  monthlyBtn.addEventListener('click', () => {
    getMonthlyReport();
    dailyBtn.classList.remove("selected");
    weeklyBtn.classList.remove("selected");
    monthlyBtn.classList.add("selected");
  })


  function getDailyReport() {

    fetch(myLink)
      .then(response => response.json())
      .then(data => {
        for (var i = 0; i < currentState.length; i++) {
          currentState[i].innerText = data[i].timeframes.daily.current + 'hrs';
          prevState[i].innerText = 'Yesterday - ' + data[i].timeframes.daily.previous + 'hrs';

        }
      })
  }

  function getWeeklyReport() {
    fetch(myLink)
      .then(response => response.json())
      .then(data => {
        for (var i = 0; i < currentState.length; i++) {
          currentState[i].innerText = data[i].timeframes.weekly.current + 'hrs';
          prevState[i].innerText = 'Last Week - ' + data[i].timeframes.weekly.previous + 'hrs';
        }
      })
  }

  function getMonthlyReport() {
    fetch(myLink)
      .then(response => response.json())
      .then(data => {
        for (var i = 0; i < currentState.length; i++) {
          currentState[i].innerText = data[i].timeframes.monthly.current + ' hrs';
          prevState[i].innerText = 'Last Month - ' + data[i].timeframes.monthly.previous + 'hrs';
        }
      })
  }
