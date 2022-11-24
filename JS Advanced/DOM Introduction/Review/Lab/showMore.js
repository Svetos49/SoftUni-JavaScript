function showText() {
    let hiddenElementText = document.getElementById('text');
    let visibleElementText = document.getElementById('more');
    let hiddenText = hiddenElementText.style.display = 'none' ? 'inline' : 'none';
    let visibleText = visibleElementText.style.display = 'inline' ? 'none': 'inline';
}