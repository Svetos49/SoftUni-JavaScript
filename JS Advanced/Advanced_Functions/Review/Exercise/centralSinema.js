function solve() {
    const [name, hall, ticketPrice  ] = document.querySelectorAll('#container input');
    const movieSection = document.querySelector('#movies ul');
    const archiveSection = document.querySelector('#archive ul')
    const addMovieButton = document.querySelector('#container button');
    addMovieButton.addEventListener('click', addMovie);


    function addMovie(e) {
        e.preventDefault();
        if(name.value != '' && hall.value != '' && ticketPrice != '' && isNaN(Number(ticketPrice.value))) {
           const movie = document.createElement('li');
           movie.innerHTML = 
           `<span>${name.value}</span>
           <strong>${hall.value}<\strong>
           <div>
           <strong>${Number(ticketPrice.value).toFixed(2)}</strong>
           <input placeholder = "Tickets Sold"/>
           <button onclick = "addToArchive">Archive</button>
           </div>`;

           movieSection.appendChild(movie);
        }
    }

     function addToArchive() {

    }
}