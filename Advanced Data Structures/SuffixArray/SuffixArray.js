function buildSuffixArray(text, n) {
    // Create array of suffix objects
    const suffixes = [];
    for (let i = 0; i < n; i++) {
        suffixes.push({
            index: i,
            suff: text.substring(i)
        });
    }

    // Simple bubble sort implementation
    for (let i = 0; i < suffixes.length - 1; i++) {
        for (let j = 0; j < suffixes.length - 1 - i; j++) {
            // Compare the "suff" property lexicographically
            const cmp = suffixes[j].suff.localeCompare(suffixes[j + 1].suff);
            if (cmp > 0) {
                [suffixes[j], suffixes[j + 1]] = [suffixes[j + 1], suffixes[j]]; 
            }
        }
    }

    // Create result array manually
    const suffixArr = [];
    for (let i = 0; i < n; i++) {
        suffixArr[i] = suffixes[i].index;
    }

    return suffixArr;
}







function buildSuffixArraySimple(text, n) {
    // Create an array of suffix objects with index and the substring starting at index
    const suffixes = [];
    for (let i = 0; i < n; i++) {
        suffixes.push({
            index: i,
            suff: text.slice(i) // Get substring starting at current index
        });
    }

    // Sort suffixes lexicographically
    suffixes.sort((a, b) => a.suff.localeCompare(b.suff));

    // Extract the indices from the sorted suffixes
    const suffixArr = suffixes.map(s => s.index);
    return suffixArr;
}