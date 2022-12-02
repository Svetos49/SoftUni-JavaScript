// function attachGradientEvents() {
//     document.getElementById('gradient').addEventListener('mousemove', onMove);
//       const output =  document.getElementById('result');
//     function onMove(event) {
//         const offsetX = event.offsetX;
//         const percent = Math.floor(offsetX / event.target.clientWidth * 100); 
//        output.textContent = `${percent}%`;
//     }
// }

function attachGradientEvents() {
  const gradient = document.getElementById('gradient');
  gradient.addEventListener('mousemove', onMove);
  const output = document.getElementById('result');

  function onMove(ev) {
    const box = ev.target;
    const offset = Math.floor(ev.offsetX / box.clientWidth * 100);

    output.textContent = `${offset}%`
  }
}