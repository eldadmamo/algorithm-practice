function queryUtil(stree, ss, se, qs, qe, index) {
    // If current segment is fully within the query range
    if (qs <= ss && qe >= se) {
        return stree[index];
    }

    // If current segment is outside the query range
    if (se < qs || ss > qe) {
        return 0;
    }

    // Calculate mid point to split the segment
    const mid = Math.floor((ss + se) / 2);
    const left = 2 * index + 1;
    const right = left + 1;

    // Recursively query left and right children
    return queryUtil(stree, ss, mid, qs, qe, left) + 
           queryUtil(stree, mid + 1, se, qs, qe, right);
}