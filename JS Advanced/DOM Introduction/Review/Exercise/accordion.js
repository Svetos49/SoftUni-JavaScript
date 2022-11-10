function toggle() {
    const button = document.querySelector('.button');

    button.textContent = button.textContent == 'More' ? 'Less': 'More';
    const textDiv = document.querySelector('#extra');
    textDiv.style.display = 
    textDiv.style.display == 'none' || textDiv.style.display == ' ' ? 
    textDiv.style.display = 'block' : textDiv.style.display = 'none';
}
