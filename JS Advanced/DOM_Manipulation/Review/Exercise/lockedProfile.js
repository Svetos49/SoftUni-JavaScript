function lockedProfile() {
    // add toggle event listener to all profile buttons

    // find associated profiles deteils
    // if it visible -> hide it and display laber 'Show more'
    // otherwise -> show it and display label 'Hide it'

    Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', onToggle));

    function onToggle(e) {
        const profile = e.target.parentElement;
        const isAktive = profile.querySelector('input[type = "radio"][value = "unlock"]').checked;
        if (isAktive) {
            const infoDiv = profile.querySelector('div');
            //  const infoDiv = Array
            //                 .from(e.target.parentElement.querySelectorAll('div'))
            //                 .find(d => d.id.includes('HiddenFields'));

            if (e.target.textContent == 'Show more') {
                infoDiv.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                infoDiv.style.display = '';
                e.target.textContent = 'Show more';
            }
        }


    }
}

// delegation
function lockedProfile() {
    document.getElementById('main').addEventListener('click', onToggle);

    function onToggle(e) {
        if(e.target.tagName == 'BUTTON') {
            const profile = e.target.parentElement;
            const isAktive = profile.querySelector('input[type = "radio"][value = "unlock"]').checked;
            if (isAktive) {
                const infoDiv = profile.querySelector('div');
                
                if (e.target.textContent == 'Show more') {
                    infoDiv.style.display = 'block';
                    e.target.textContent = 'Hide it';
                } else {
                    infoDiv.style.display = '';
                    e.target.textContent = 'Show more';
                }
            }
        }
        
    }
}