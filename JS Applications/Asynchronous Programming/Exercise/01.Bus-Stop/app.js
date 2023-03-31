// async function getInfo() {
//     const stopNameEl = document.getElementById('stopName');
//     const timeTableEl = document.getElementById('buses');

//     let stopId = document.getElementById('stopId').value;
//     url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;



//     try{
//       stopNameEl.textContent = 'Loading...'; 
//       timeTableEl.replaceChildren(); 
//       const res = await fetch(url);
//       if(res.status != 200) {
//        throw new Error('Stop ID not found');
//       }
//       const data = await res.json();
//       stopNameEl.textContent = data.name;
//       Object.entries(data.buses).forEach(b => {
//           const liElement = document.createElement('li');
//           liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;
//           timeTableEl.appendChild(liElement);
//       })
//     } catch(error){
//         stopNameEl.textContent = 'Error'; 
//     }
// }


async function getInfo() {
    // read input value
    // make request to server
    // parse response data
    // display data
    // * error checking for request

    const stopId = document.getElementById('stopId').value;
    const stopNameElement = document.getElementById('stopName');
    const timeTableElement = document.getElementById('buses')

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;


    stopNameElement.textContent = 'loading...'
    timeTableElement.replaceChildren();

    fetch(url)
        .then(res => {
            if (res.status != 200) {
                throw new Error('Stop ID not found');
            }

            return res.json();
        }).then(data => {
            stopNameElement.textContent = data.name;

            Object.entries(data.buses).forEach(b => {
                const liElement = document.createElement('li');
                liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;
                timeTableElement.appendChild(liElement);
            });

        })

        .catch(error => {
            stopNameElement.textContent = 'Error';

        });

}

