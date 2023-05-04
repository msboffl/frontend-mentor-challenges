const calculateBtn = document.getElementById("calculateBtn");

function calculateAge() {
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  // Create a Date object with the user input
  const birthDate = new Date(`${month} ${day}, ${year}`);

  // Calculate the age in milliseconds
  const ageInMs = Date.now() - birthDate.getTime();

  // Convert the age in milliseconds to years, months, and days
  const ageInYears = Math.floor(ageInMs / 1000 / 60 / 60 / 24 / 365);
  const ageInMonths = Math.floor(ageInMs / 1000 / 60 / 60 / 24 / 30.44) % 12;
  const ageInDays = Math.floor(
    Math.round(ageInMs / 1000 / 60 / 60 / 24) % 30.44
  );

  document.querySelector(".date-output h1 div:nth-child(1) span").textContent =
    ageInYears;
  document.querySelector(".date-output h1 div:nth-child(2) span").textContent =
    ageInMonths;
  document.querySelector(".date-output h1 div:nth-child(3) span").textContent =
    ageInDays;
}

// Click Event
calculateBtn.addEventListener("click", calculateAge);
