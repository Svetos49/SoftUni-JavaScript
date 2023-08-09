function attachEvents() {
  let submitBtn = document.getElementById('submit');
  let locationIn = document.getElementById('location');
  let forecast = document.getElementById('forecast');

  let currentConditionElement = document.getElementById('current');
  let upcomingForecastElement = document.getElementById('upcoming');
  const conditions = {
    Sunny: '☀',
    'Partly sunny': '⛅',
    Overcast: '☁',
    Rain: '☂',
    Degrees: '°',
  };

  submitBtn.addEventListener('click', currForecastHandler);
  submitBtn.addEventListener('click', upcomingForecastHandler);

  async function currForecastHandler(ev) {
    currentConditionElement.innerHTML = '';
    const baseURL = 'http://localhost:3030/jsonstore/forecaster';
    const locationName = locationIn.value;
    if (!locationName) {
      return;
    }
    try {
      let response = await fetch(baseURL + '/locations');
      let data = await response.json();

      let chosenLocation = data.find((x) => x.name === locationName);

      if (!chosenLocation) {
        throw new Error('Location not found');
      }

      const currConditionsURL = baseURL + `/today/${chosenLocation.code}`;
      let currConditionResponse = await fetch(currConditionsURL);
      let currConditionData = await currConditionResponse.json();

      if (currConditionResponse.status !== 200) {
        throw new Error('Invalid Data');
      }

      createCurrentWeatherArticle(currConditionData);
    } catch (error) {
      forecast.style.display = 'block';
      forecast.textContent = 'Error';
      console.log(error);
    }
  }

  async function upcomingForecastHandler(ev) {
    upcomingForecastElement.innerHTML = '';
    const baseURL = 'http://localhost:3030/jsonstore/forecaster';
    const locationName = locationIn.value;
    if (!locationName) {
      return;
    }
    try {
      let response = await fetch(baseURL + '/locations');
      let data = await response.json();

      let chosenLocation = data.find((x) => x.name === locationName);

      if (!chosenLocation) {
        throw new Error('Location not found');
      }

      const upcomingForecastsURL = baseURL + `/upcoming/${chosenLocation.code}`;

      let forecastsResponse = await fetch(upcomingForecastsURL);
      let forecastsData = await forecastsResponse.json();

      if (forecastsResponse.status !== 200) {
        throw new Error('Invalid Data');
      }

      createUpcomingWeatherArticle(forecastsData);
    } catch (error) {
      forecast.style.display = 'block';
      forecast.textContent = 'Error';
      console.log(error);
    }
  }
// Long and slow way to create the whole DOM Nested elements for an Article
  function createCurrentWeatherArticle(data) {
    let forecastsDiv = document.createElement('div');
    forecastsDiv.classList.add('forecasts');

    let conditionSymbolSpan = document.createElement('span');
    conditionSymbolSpan.className = 'condition symbol';
    conditionSymbolSpan.textContent = conditions[data.forecast.condition];

    let conditionSpan = document.createElement('span');
    let forecastDataSpan1 = document.createElement('span');
    forecastDataSpan1.classList.add('forecast-data');
    forecastDataSpan1.textContent = data.name;
    let forecastDataSpan2 = document.createElement('span');
    forecastDataSpan2.classList.add('forecast-data');
    forecastDataSpan2.textContent = `${data.forecast.low}${conditions.Degrees}/${data.forecast.high}${conditions.Degrees}`;
    let forecastDataSpan3 = document.createElement('span');
    forecastDataSpan3.classList.add('forecast-data');
    forecastDataSpan3.textContent = data.forecast.condition; 

    conditionSpan.appendChild(forecastDataSpan1);
    conditionSpan.appendChild(forecastDataSpan2);
    conditionSpan.appendChild(forecastDataSpan3);

    forecastsDiv.appendChild(conditionSymbolSpan);
    forecastsDiv.appendChild(conditionSpan);
    currentConditionElement.appendChild(forecastsDiv);
    forecast.style.display = 'block';
  }
// Second way of creating DOM nested elements for and Article using the Factory Function e
  function createUpcomingWeatherArticle(data) {
    console.log(data);
    let forecastInfo = document.createElement('div');

    data.forecast.forEach((f) => {
      let result = e('span', { className: 'upcoming' }, [
        e('span', { className: 'symbol' }, `${conditions[f.condition]}`),
        e(
          'span',
          { className: 'forecast-data' },
          `${f.low}${conditions.Degrees}/${f.high}${conditions.Degrees}`
        ),
        e('span', { className: 'forecast-data' }, `${f.condition}`),
      ]);
      forecastInfo.appendChild(result);
    });

    upcomingForecastElement.appendChild(forecastInfo);
  }

  // Factory function for creating DOM Elements with TYPE, Attributes, and Content (Text node or Nested Elements)
  function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
      if (attr.substring(0, 2) == 'on') {
        result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
      } else {
        result[attr] = value;
      }
    }

    content = content.reduce(
      (a, c) => a.concat(Array.isArray(c) ? c : [c]),
      []
    );

    content.forEach((e) => {
      if (typeof e == 'string' || typeof e == 'number') {
        const node = document.createTextNode(e);
        result.appendChild(node);
      } else {
        result.appendChild(e);
      }
    });

    return result;
  }
}

attachEvents();
