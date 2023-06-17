// function attachEvents() {
//     console.log("TODO...");
// }

// attachEvents();



// function attachEvents() {
//     document.getElementById('submit').addEventListener('click', getWeather);
//     // document.getElementById('forecast').style.display = 'block';
// }
// attachEvents();

// async function getWeather() {
//     // get forecast
//     const input = document.getElementById('location');
//     const sityName = input.value;

//     const code = await getCode(sityName);

//     const [current, upcoming] = await  Promise.all([
//         getCurrent(code),
//         getUpcoming(code)
//     ])
// }

// async function getCode(sityName) {
//     // get list of sities
//     const url = 'http://localhost:3030/jsonstore/forecaster/locations';
//     // find sity code by matching sity name
//     const response = await fetch(url);
//     const data = await response.json();

//    return data.find(x => x.name.toLowerCase() == sityName.toLowerCase()).code;
// }

// async function getCurrent(code) {
//     // get current condition by code
//     const url = 'http://localhost:3030/jsonstore/forecaster/today/' + code;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// }

// async function getUpcoming(code) {
//     // get upcoming forecast
//     const url = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + code;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// }




function attachEvents() {
    const getWeatherBtn = document.getElementById('submit');
    getWeatherBtn.addEventListener('click', getWetherHandler);
    const locationInput = document.getElementById('location')

    const conditions = {
        Sunny: () => '☀',
        'Partly sunny': () => '⛅',
        Overcast: () => '☁',
        Rain: () => '☂',
        Degrees: () => '°'
    }

    function getWetherHandler() {
        let forecastContainer = document.getElementById('forecast');
        forecastContainer.style.display = 'block';
        let currentForecastContainer = document.querySelector('#current');
        Array.from(currentForecastContainer.querySelectorAll('div')).forEach((el,i) => {
            i != 0 ? el.remove(): el;
        })
        let upcomingForecastContainer = document.querySelector('#upcoming');
        Array.from(upcomingForecastContainer.querySelectorAll('div')).forEach((el,i) => {
            i != 0 ? el.remove(): el;
        })

        fetch('http://localhost:3030/jsonstore/forecaster/locations')
            .then(body => body.json())
            .then(locations => {
                 console.log(locations);
                let locationName = locationInput.value;
                let location = locations.find(x => x.name === locationName);
                console.log(location);
                return fetch(`http://localhost:3030/jsonstore/forecaster/today/${location.code}`)
                    .then(body => body.json())
                    .then(currentWetherReport => ({ code: location.code, currentWetherReport }))
            })
            .then(({ code, currentWetherReport }) => {
                console.log(currentWetherReport);
                let htmlReport = createCurrentWetherElement(currentWetherReport);
               
                currentForecastContainer.appendChild(htmlReport);

                return fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`);
            })
            .then(body => body.json())
            .then(upcomingWeatherReport => {
                console.log(upcomingWeatherReport);
                let upcomingForecast = createUpcomingWetherElement(upcomingWeatherReport);
                
                upcomingForecastContainer.appendChild(upcomingForecast);
            })
            .catch(error => {
                let errDiv = document.createElement('div');
                errDiv.classList.add('label');
                errDiv.textContent = 'Error';
                currentForecastContainer.appendChild(errDiv)
            })

        function createUpcomingWetherElement(wetherReport) {
            let forecastInfoDiv = document.createElement('div');
            forecastInfoDiv.classList.add('forecast-info');

            let upcomingSpan = document.createElement('span');
            upcomingSpan.classList.add('upcoming');

            // let symbolSpan = document.createElement('span');
            // symbolSpan.classList.add('symbol');
            //symbolSpan.textContent = conditions[forecast.condition]();

            let day1Html = createDayReport(wetherReport.forecast[0]);
            let day2Html = createDayReport(wetherReport.forecast[1]);
            let day3Html = createDayReport(wetherReport.forecast[2]);

            forecastInfoDiv.appendChild(day1Html);
            forecastInfoDiv.appendChild(day2Html);
            forecastInfoDiv.appendChild(day3Html);
            return forecastInfoDiv;
            
        }

        function createDayReport(forecast) {
            let upcomingSpan = document.createElement('span');
            upcomingSpan.classList.add('upcoming');

            let symbolSpan = document.createElement('span');
            symbolSpan.classList.add('symbol');
            symbolSpan.textContent = conditions[forecast.condition]();
            let tempSpan = document.createElement('span');
            tempSpan.classList.add('forecast-data')
            tempSpan.textContent = `${forecast.low}°/${forecast.high}°`;

            let wetherSpan = document.createElement('span');
            wetherSpan.classList.add('forecast-data')
            wetherSpan.textContent = forecast.condition;

            upcomingSpan.appendChild(symbolSpan);
            upcomingSpan.appendChild(tempSpan);
            upcomingSpan.appendChild(wetherSpan);

            return upcomingSpan;

        }

        function createCurrentWetherElement(wetherReport) {
            let forecastDiv = document.createElement('div');
            forecastDiv.classList.add('forecasts');

            let conditionSymbolSpan = document.createElement('span');
            conditionSymbolSpan.classList.add('condition', 'symbol');
            conditionSymbolSpan.textContent = conditions[wetherReport.forecast.condition]();

            let conditionSpan = document.createElement('span');
            conditionSpan.classList.add('condition');

            let nameSpan = document.createElement('span');
            nameSpan.classList.add('forecast-data')
            nameSpan.textContent = wetherReport.name;

            let tempSpan = document.createElement('span');
            tempSpan.classList.add('forecast-data')
            tempSpan.textContent = `${wetherReport.forecast.low}°/${wetherReport.forecast.high}°`;

            let wetherSpan = document.createElement('span');
            wetherSpan.classList.add('forecast-data')
            wetherSpan.textContent = wetherReport.forecast.condition;

            conditionSpan.appendChild(nameSpan);
            conditionSpan.appendChild(tempSpan);
            conditionSpan.appendChild(wetherSpan);



            forecastDiv.appendChild(conditionSymbolSpan);
            forecastDiv.appendChild(conditionSpan);
            return forecastDiv;
        }
    }
}
attachEvents()