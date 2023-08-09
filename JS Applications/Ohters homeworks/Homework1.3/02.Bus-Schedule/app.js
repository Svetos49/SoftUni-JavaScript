function solve() {
  const InfoElement = document.querySelector('.info');
  const departBtn = document.getElementById('depart');
  const arriveBtn = document.getElementById('arrive');

  // On Page Load (First time) use default starting values;
  let stopId = {
    name: 'depot',
    next: 'depot',
  };

  async function depart() {
    const url = `http://localhost:3030/jsonstore/bus/schedule/${stopId.next}`;
try {
    const response = await fetch(url);

    stopId = await response.json();
if (response.status!==200) {
    throw new Error('invalid data received');
}
    InfoElement.textContent = `Next stop ${stopId.name}`;

    departBtn.setAttribute('disabled', true);
    arriveBtn.removeAttribute('disabled');
} catch (error) {
    departBtn.setAttribute('disabled', true);
    arriveBtn.setAttribute('disabled', true);
    InfoElement.textContent ='Error'
}
   
  }

  function arrive() {
    InfoElement.textContent = `Arriving at ${stopId.name}`;
    departBtn.removeAttribute('disabled');
    arriveBtn.setAttribute('disabled', true);
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
