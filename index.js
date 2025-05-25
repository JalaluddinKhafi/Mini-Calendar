const monthNameEl = document.getElementById("month_name");
const dayNameEl = document.getElementById("day_name");
const dayNumEl = document.getElementById("day_number");
const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth();

monthNameEl.innerText = date.toLocaleString("en", { month: "long" });
dayNameEl.innerText = date.toLocaleString("en", { weekday: "long" });
dayNumEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();
