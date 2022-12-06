// function lockedProfile() {
//     document.getElementById('main').addEventListener('click', (e) =>{
//         if(e.target.tagName === 'BUTTON') {
//             const profile = e.target.parentNode;
//             const isLocked = profile.querySelector('input[type=radio]:checked').value === 'lock';

//             if(isLocked) {
//                 return;
//             }

//             let div = profile.querySelector('div');
//             let isVisible = div.style.display === 'block';
//             div.style.display = isVisible ? 'none' : 'block';
//             e.target.textContent = !isVisible ? 'Hide it': 'Show more';
//         }
//     })
// }

// function lockedProfile() {
//     // add toggle event listener to all profile buttons

//     // find associated profiles deteils
//     // if it visible -> hide it and display laber 'Show more'
//     // otherwise -> show it and display label 'Hide it'

//     Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', onToggle));

//     function onToggle(e) {
//         const profile = e.target.parentElement;
//         const isAktive = profile.querySelector('input[type = "radio"][value = "unlock"]').checked;
//         if(isAktive) {
//             const infoDiv = profile.querySelector('div');
//             //  const infoDiv = Array
//             //                 .from(e.target.parentElement.querySelectorAll('div'))
//             //                 .find(d => d.id.includes('HiddenFields'));

//                    if(e.target.textContent == 'Show more') {
//                         infoDiv.style.display = 'block';
//                         e.target.textContent = 'Hide it';
//                    } else {
//                     infoDiv.style.display = 'none';
//                         e.target.textContent = 'Show more';
//                    }       
//         }


//     }
// }




function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(b => b.addEventListener('click', onToggle));


    function onToggle(e) {
        const profile = e.target.parentElement;
        const isActive = profile.querySelector('input[type = "radio"][value = "unlock"]').checked;

        if (isActive) {
        const infoDif = Array.from(e.target.parentElement.querySelectorAll('div'))
                .find(d => d.id.includes('HiddenFields'));
            if (e.target.textContent == 'Show more') {
                infoDif.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                infoDif.style.display = '';
                e.target.textContent = 'Show more'
            }
        }

        '----------------------------------------------------------------'
    
        const radio = Array.from(document.querySelectorAll('input[type = "radio"]'));
        for(input of radio) {
            input.addEventListener('click', onLockToggle);
        }

        function onLockToggle(e) {
            const button = e.target.parentElement.querySelector('button')
            console.log(e.target.value);

            if(e.target.value == 'lock') {
                button.disabled = true;
            } else {
                button.disabled = false;
            }
        }

    }
}


