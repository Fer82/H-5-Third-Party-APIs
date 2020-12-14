function initPage() {
  // Get the current hour of the day
  const currentHour = parseInt(moment().format("kk"));
  // Update the page with the current date
  const currentDayEl = document.getElementById("currentDay");
  currentDayEl.innerHTML = moment().format("dddd, MMMM Do YYYY");

  // Local storage Array
  const openSchedule = [
    {
      "time": 9,
      "note": ""
    },
    {
      "time": 10,
      "note": ""
    },
    {
      "time": 11,
      "note": ""
    },
    {
      "time": 12,
      "note": ""
    },
    {
      "time": 13,
      "note": ""
    },
    {
      "time": 14,
      "note": ""
    },
    {
      "time": 15,
      "note": ""
    },
    {
      "time": 16,
      "note": ""
    },
    {
      "time": 17,
      "note": ""
    }
  ];

  const dayPlan = JSON.parse(localStorage.getItem("Schedule")) || openSchedule;
    const timeSlotContainer = document.getElementById("timeSlot");
    timeSlotContainer.innerHTML = "";
}

