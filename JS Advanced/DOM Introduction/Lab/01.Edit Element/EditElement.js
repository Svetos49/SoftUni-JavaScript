function editElement(ref, match, replacer) {
    const matcher = new RegExp(match, 'g')
    const result = ref.textContent.replace(matcher, replacer);
    ref.textContent = result;
}

// editElement(ref, match, replacer)



// function editElement(ref, match, replacer) {
//     const matcher = new RegExp(match, 'g')
//    const result = ref.textContent.replace(matcher, replacer);
//    ref.textContent = result;
// }