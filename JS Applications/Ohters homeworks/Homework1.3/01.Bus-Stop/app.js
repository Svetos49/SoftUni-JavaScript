async function getInfo() {
  let stopID = document.getElementById('stopId').value;
  let StopNameElement = document.getElementById('stopName');
  let busesElements = document.getElementById('buses');

  const url = `http://localhost:3030/jsonstore/bus/businfo/${stopID}`;

  try {
    // Clear Data
    StopNameElement.textContent - '';
    busesElements.replaceChildren();

    // Make a Request to Server
    const res = await fetch(url);
    // Check for Error
    if (res.status !== 200) {
      throw new Error('Stop ID not found');
    }
    // Parse Data
    const data = await res.json();

    // Render received data
    StopNameElement.textContent = data.name;
    Object.entries(data.buses).forEach((b) => {
      const liElement = document.createElement('li');
      liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;
      busesElements.appendChild(liElement);
    });

    // Show Error
  } catch (error) {
    StopNameElement.textContent = 'Error';
  }
}
