document
  .getElementById("converterForm1")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const litersInput = document.getElementById("liters");
    const gallonsOutput = document.getElementById("gallons");
    const litersError = document.getElementById("litersError");
    const gallonsError = document.getElementById("gallonsError");

    // Reset errors
    litersError.textContent = "";
    gallonsError.textContent = "";

    // Validate liters input
    const litersValue = parseFloat(litersInput.value);

    const regex = /^[0-9.]*$/;
    if (isNaN(litersValue)) {
      alert("WRONG INPUT --> Liters input field should not be empty");
      litersInput.value = "";
      gallonsOutput.value = "";
      return;
    } else if (!regex.test(litersValue)) {
      alert("Special characters are not allowed in the Liters field");
      litersInput.value = "";
      gallonsOutput.value = "";
      return;
    } else if (litersValue < 0) {
      alert("WRONG INPUT --> Liters input field should not be negative number");
      litersInput.value = "";
      gallonsOutput.value = "";
      return;
    } else if (litersInput.value.trim() === "") {
      alert(
        "WRONG INPUT --> Liters input field should not have any whitespace"
      );
      litersInput.value = "";
      gallonsOutput.value = "";
      return;
    } else if (litersValue < 1 || litersValue > 1000) {
      alert("Liters must be between 1 and 1000");
      litersInput.value = "";
      gallonsOutput.value = "";
      return;
    }
    // Perform conversion
    const gallonsValue = litersValue * 0.264172;
    gallonsOutput.value = gallonsValue.toFixed(2);
  });
document
  .getElementById("converterForm2")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const gallonsInput = document.getElementById("gallons2");
    const litersOutput = document.getElementById("liters2");
    const gallons2Error = document.getElementById("gallons2Error");
    const liters2Error = document.getElementById("liters2Error");

    // Reset errors
    gallons2Error.textContent = "";
    liters2Error.textContent = "";

    // Validate gallons input
    const gallonsValue = parseFloat(gallonsInput.value);
    const regex = /^[0-9.]*$/;
    if (isNaN(gallonsValue)) {
      alert("WRONG INPUT --> Gallons input field should not be empty");
      gallonsInput.value = "";
      litersOutput.value = "";
      return;
    } else if (!regex.test(gallonsValue)) {
      alert("Special characters are not allowed in the Gallons input field");
      gallonsInput.value = "";
      litersOutput.value = "";
      return;
    } else if (gallonsValue < 0) {
      alert(
        "WRONG INPUT --> Gallons input field should not be negative number"
      );
      gallonsInput.value = "";
      litersOutput.value = "";
      return;
    } else if (gallonsInput.value.trim() === "") {
      alert(
        "WRONG INPUT --> Gallons input field should not have any whitespace"
      );
      gallonsInput.value = "";
      litersOutput.value = "";
      return;
    } else if (gallonsValue < 1 || gallonsValue > 1000) {
      alert("Gallons must be between 1 and 1000");
      gallonsInput.value = "";
      litersOutput.value = "";
      return;
    }

    // Perform conversion
    const litersValue = gallonsValue * 3.78541; // Conversion formula (1 gallon = 3.78541 liters)
    litersOutput.value = litersValue.toFixed(2);
  });
