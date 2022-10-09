function sortBy2Criteria(arr) {
    return arr.sort((a, b) => {
        if(a.length === b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    }).join('\n');
}

sortBy2Criteria(['alpha', 'beta', 'gamma'])
console.log(sortBy2Criteria(['alpha', 'beta', 'gamma']));