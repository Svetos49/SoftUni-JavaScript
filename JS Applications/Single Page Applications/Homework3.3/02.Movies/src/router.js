
function hideAll() {
    document.querySelectorAll('.view-section').forEach(s => s.style.display = 'none');
}

export function showView(section) {
    hideAll();
    section.style.display = 'block';
}