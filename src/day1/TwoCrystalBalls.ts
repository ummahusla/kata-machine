export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;

    // we doing a small jumps to figure out where it will break
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    // we go back to the last safe spot
    i -= jmpAmount;

    // we do a linear search from the last safe spot until we find the exact place
    for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
