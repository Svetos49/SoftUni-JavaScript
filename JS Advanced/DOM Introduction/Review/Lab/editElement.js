function editElement(reference, match, replacer) {
    const text = reference.textContent;
    reference.textContent = text.replaceAll(match,replacer);
}

function editElement(ref, match, replacer) {
    const matcher = new RegExp(match, 'g')
   const result = ref.textContent.replace(matcher, replacer);
   ref.textContent = result;
}