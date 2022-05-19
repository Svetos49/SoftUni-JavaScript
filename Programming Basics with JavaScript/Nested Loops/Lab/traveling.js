function traveling(input) {
    let index = 0;
    let command = input[index];
    index++;
    let allSum = 0;
    while (command != 'End') {
        let destination = command;
        let sum = 0;
        allSum = 0;
        let budget = Number(input[index]);
        index++;
        while (allSum < budget) {
            sum = Number(input[index]);
            index++;

            allSum += sum;
          
            if (allSum >= budget) {
                console.log(`Going to ${destination}!`);
                break;
            }
        }


        command = input[index];
        index++;
    }

}

traveling([
    'Greece', '1000', '200',
    '200', '300', '100',
    '150', '240', 'Spain',
    '1200', '300', '500',
    '193', '423', 'End',
]);

traveling([
    'France', '2000', '300',
    '300', '200', '400',
    '190', '258', '360',
    'Portugal', '1450', '400',
    '400', '200', '300',
    '300', 'Egypt', '1900',
    '1000', '280', '300',
    '500', 'End',]);