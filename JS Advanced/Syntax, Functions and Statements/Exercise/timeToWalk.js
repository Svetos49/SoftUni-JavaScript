function timeToWalk(steps, footprints, speed) {
       let meters = steps * footprints;
       let speedInMetersS = speed * 1000 / 3600;
       let time = meters / speedInMetersS;
       let rest = Math.floor(meters / 500) * 60;
       let allTime = time + rest;
       let hours = Math.floor(allTime / 3600).toString().padStart(2, '0');
       let minutes = Math.floor(allTime / 60).toString().padStart(2, '0');
       let seconds = (allTime % 60).toFixed(0).padStart(2, '0');
    

   return `${hours}:${minutes}:${seconds}`
}


console.log(timeToWalk(4000, 0.60, 5));