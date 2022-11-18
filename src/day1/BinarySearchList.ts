export default function bs_list(haystack: number[], needle: number): boolean {
    // lowest
    let lo = 0;
    // highest
    let hi = haystack.length;

    do {
        // middle
        const m = Math.floor(lo + (hi - lo) / 2);
        // value
        const v = haystack[m];

        if (v === needle) {
            // if the value is equivalent to needle means we found it
            return true;
        } else if (v > needle) {
            // if the value is greater than needle, that means anything on the right hand side,
            // is gonna be greater than me. so i want to reduce  the high side, to this point
            // and exclude the middle point.
            hi = m;
        } else {
            // value is less than the needle, that means we need to search on higher side
            lo = m + 1;
        }
    } while (lo < hi);

    return false;
}
