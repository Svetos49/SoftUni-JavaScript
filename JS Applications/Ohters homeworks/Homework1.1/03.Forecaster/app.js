function attachEvents() {
  const contentElement = document.getElementById("content");
  const locationInputElement = document.getElementById("location");
  const submitBtnElement = document.getElementById("submit");
  const currentConditionElement = document.getElementById("current");
  const upcomingConditionElement = document.getElementById("upcoming");
  const forecastElement = document.getElementById("forecast");

  submitBtnElement.addEventListener("click", event);

  async function event() {
    if (upcomingConditionElement.children[1] !== undefined) {
      currentConditionElement.children[1].remove();
      upcomingConditionElement.children[1].remove();
    }

    const locationsUrl = "http://localhost:3030/jsonstore/forecaster/locations";
    const locations = await getData(locationsUrl);

    for (const location of locations) {
      if (locationInputElement.value === location.name) {
        forecastElement.style.display = "block";

        const currentWeatherUrl = `http://localhost:3030/jsonstore/forecaster/today/${location.code}`;
        const currentWeatherData = await getData(currentWeatherUrl);
        const threeDayUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/${location.code}`;
        const threeDayData = await getData(threeDayUrl);

        const forecastsDiv = document.createElement("div");
        const conditionSymbolSpan = document.createElement("span");
        const conditionSpan = document.createElement("span");
        const citySpan = document.createElement("span");
        const tempSpan = document.createElement("span");
        const weatherSpan = document.createElement("span");

        forecastsDiv.classList.add("forecasts");
        conditionSymbolSpan.classList.add("condition-symbol");
        conditionSpan.classList.add("condition");
        citySpan.classList.add("forecast-data");
        tempSpan.classList.add("forecast-data");
        weatherSpan.classList.add("forecast-data");

        createForecastIcon(currentWeatherData.forecast, conditionSymbolSpan);

        citySpan.textContent = currentWeatherData.name;
        tempSpan.textContent = `${currentWeatherData.forecast.low}°/${currentWeatherData.forecast.high}°`;
        weatherSpan.textContent = currentWeatherData.forecast.condition;

        conditionSpan.appendChild(citySpan);
        conditionSpan.appendChild(tempSpan);
        conditionSpan.appendChild(weatherSpan);
        forecastsDiv.appendChild(conditionSymbolSpan);
        forecastsDiv.appendChild(conditionSpan);
        currentConditionElement.appendChild(forecastsDiv);

        const forecastInfoDiv = document.createElement("div");
        for (let i = 0; i < 3; i++) {
          const upcomingDiv = document.createElement("div");
          const symbolSpan = document.createElement("span");
          const thirdTempSpan = document.createElement("span");
          const thirdWeatherSpan = document.createElement("span");

          forecastInfoDiv.classList.add("forecast-info");
          upcomingDiv.classList.add("upcoming");
          symbolSpan.classList.add("symbol");
          thirdTempSpan.classList.add("forecast-data");
          thirdWeatherSpan.classList.add("forecast-data");

          createForecastIcon(threeDayData.forecast[i], symbolSpan);

          thirdTempSpan.textContent = `${threeDayData.forecast[i].low}°/${threeDayData.forecast[i].high}°`;
          thirdWeatherSpan.textContent = threeDayData.forecast[i].condition;

          upcomingDiv.appendChild(symbolSpan);
          upcomingDiv.appendChild(thirdTempSpan);
          upcomingDiv.appendChild(thirdWeatherSpan);
          forecastInfoDiv.appendChild(upcomingDiv);
        }

        if (contentElement.children[2] !== undefined) {
          contentElement.children[2].remove();
        }

        upcomingConditionElement.appendChild(forecastInfoDiv);
        return;
      }
    }

    forecastElement.style.display = "none";
    if (contentElement.children[2] === undefined) {
      const errorDiv = document.createElement("div");
      errorDiv.textContent = "Error";
      contentElement.appendChild(errorDiv);
    }
  }
}

async function getData(url) {
  const response = await fetch(url);
  return response.json();
}

function createForecastIcon(forecastData, forecastSymbolSpan) {
  if (forecastData.condition === "Sunny") {
    forecastSymbolSpan.textContent = "☀";
  } else if (forecastData.condition === "Partly sunny") {
    forecastSymbolSpan.textContent = "⛅";
  } else if (forecastData.condition === "Overcast") {
    forecastSymbolSpan.textContent = "☁";
  } else if (forecastData.condition === "Rain") {
    forecastSymbolSpan.textContent = "☂";
  }
}

attachEvents();
