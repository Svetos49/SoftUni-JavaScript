function addAndRemoveEl(input) {
    let out = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'add') {
            out.push(i + 1);

        } else if (input[i] == 'remove') {
            out.pop();

        }
    }
    if (out.length == 0) {
        console.log('Empty');
    }
    for (let line of out) {
        console.log(line);
    }
}

addAndRemoveEl(['add', 'add', 'remove', 'add', 'add'])
addAndRemoveEl(['remove', 'remove', 'remove'])