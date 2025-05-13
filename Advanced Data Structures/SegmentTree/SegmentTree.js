function buildST(arr, n) {
    if (n === 0) return [];
    const h = Math.ceil(Math.log2(n));
    const max_size = 2 * (2 ** h) - 1;
    const st = new Array(max_size).fill(0);
    buildSTUtil(arr, 0, n - 1, st, 0);
    return st;
  }
  
  function buildSTUtil(arr, ss, se, stree, sindex) {
    if (ss === se) {
      stree[sindex] = arr[ss];
      return stree[sindex];
    }
    const mid = Math.floor((ss + se) / 2);
    const left = 2 * sindex + 1;
    const right = left + 1;
    const leftSum = buildSTUtil(arr, ss, mid, stree, left);
    const rightSum = buildSTUtil(arr, mid + 1, se, stree, right);
    stree[sindex] = leftSum + rightSum;
    return stree[sindex];
  }