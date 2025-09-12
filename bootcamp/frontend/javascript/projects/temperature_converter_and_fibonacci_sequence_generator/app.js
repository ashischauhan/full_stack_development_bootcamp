function handleFormSubmit() {
  console.log("Form submitted");
  const temp = document.getElementById("temp").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  if (temp === "" || isNaN(parseFloat(temp))) {
    return alert(`Temperature: ${temp} is not a valid value.`);
  }

  if (from === "" || to === "") {
    return alert(`Please select a unit to convert to.`);
  }

  const result = convertTemperature(temp, from, to);
  const capitalizedFrom = from.charAt(0).toUpperCase() + from.slice(1);
  const capitalizedTo = to.charAt(0).toUpperCase() + to.slice(1);

  // Add degree symbol for Celsius and Fahrenheit
  const fromSymbol = from === "celsius" || from === "fahrenheit" ? "°" : "";
  const toSymbol = to === "celsius" || to === "fahrenheit" ? "°" : "";

  document.getElementById(
    "result"
  ).textContent = `${temp}${fromSymbol} ${capitalizedFrom} is ${result}${toSymbol} ${capitalizedTo}`;

  console.log(
    `${temp}${fromSymbol} ${capitalizedFrom} is ${result}${toSymbol} ${capitalizedTo}`
  );

  console.log(temp, from, to);
}

function convertTemperature(temp, from, to) {
  let result = temp;
  if (from === "celsius") {
    if (to === "fahrenheit") {
      result = (temp * 9) / 5 + 32;
    } else if (to === "kelvin") {
      result = parseFloat(temp) + 273.15;
    }
  } else if (from === "fahrenheit") {
    if (to === "celsius") {
      result = ((parseFloat(temp) - 32) * 5) / 9;
    } else if (to === "kelvin") {
      result = ((parseFloat(temp) - 32) * 5) / 9 + 273.15;
    }
  } else if (from === "kelvin") {
    if (to === "celsius") {
      result = parseFloat(temp) - 273.15;
    } else if (to === "fahrenheit") {
      result = ((parseFloat(temp) - 273.15) * 9) / 5 + 32;
    }
  }
  return result.toFixed(2);
}
