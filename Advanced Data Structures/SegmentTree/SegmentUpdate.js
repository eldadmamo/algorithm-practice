function update(arr, stree, n, index, newVal) {
    if (index < 0 || index >= n) return;
  
    const diff = newVal - arr[index];
    arr[index] = newVal;
    updateUtil(stree, 0, n - 1, index, diff, 0);
  }
  
  function updateUtil(stree, ss, se, index, diff, sindex) {
    if (index < ss || index > se) return;
  
    stree[sindex] += diff;
  
    if (ss !== se) {
      const mid = Math.floor((ss + se) / 2);
      const left = 2 * sindex + 1;
      const right = left + 1;
      updateUtil(stree, ss, mid, index, diff, left);
      updateUtil(stree, mid + 1, se, index, diff, right);
    }
  }

  input = [1,2,3,4,5,6];
  index = 3;
  newVal = 10;