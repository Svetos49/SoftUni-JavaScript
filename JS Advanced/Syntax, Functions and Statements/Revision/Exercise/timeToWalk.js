function timeToWalk(steps, footprint, speed) {
  let meters = steps * footprint;
  let speedInM_s = speed * 1000 / 3600;
  let restTime = Math.floor(meters / 500) * 60;
  let time = meters / speedInM_s;
  let allTime = time + restTime;
  let hours = Math.floor(allTime / 3600).toString().padStart(2, '0');
  let minutes = Math.floor(allTime / 60).toString().padStart(2, '0');
  let seconds = (allTime % 60).toFixed(0).padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}

console.log(timeToWalk(4000, 0.60, 5));
timeToWalk(4000, 0.60, 5);