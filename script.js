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

   // For loop to generate the time slots for the whole day
   for (let i = 0; i < dayPlan.length; i++) {
    let hourString;
    const hour = 9 + i;
    if (hour < 12) {
      hourString = `${hour} AM`;
    } else if (hour === 12) {
      hourString = `${hour} PM`;
    } else {
      hourString = `${hour - 12} PM`
    }
    const timeSlot = document.createElement("div");
    timeSlot.setAttribute("class", "row input-group timeSlot");
    timeSlotContainer.append(timeSlot);

    const timeContainer = document.createElement("div");
    timeContainer.setAttribute("class", "input-group-prepend");
    timeSlot.append(timeContainer);

    const timeSpan = document.createElement("span");
    timeSpan.setAttribute("class", "input-group-text hour");
    timeSpan.innerHTML = hourString;
    timeContainer.append(timeSpan);
  }
}

