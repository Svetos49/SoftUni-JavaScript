function solve(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let area = 0;
    let iner = 0;
    let outer = 0;
    let step = 0;
    for (let i = base; i >= 1; i = i - 2) {
        step++
        if (step % 5 == 0 && i > 2) {
            iner = (i - 2) * (i - 2);
            stone += iner * increment;
            outer = (4 * i) - 4;
            lapis += outer * increment;
        } else if (i <= 2) {
            gold += (i * i) * increment;
        } else {
            area = i * i;
            iner = (i - 2) * (i - 2);
            stone += iner * increment;
            outer = (4 * i) - 4;
            marble += outer * increment;
        }
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(step * increment)}`);
}


solve(11, 1);