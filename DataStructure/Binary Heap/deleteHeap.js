function deleteMax() {
    // Swap the root (max) with the last element
    [arr[0], arr[size]] = [arr[size], arr[0]];
    console.log(`Max = ${arr[size]}`);
    size--;
    heapify(arr, 0, size);
  }
  
  function heapify(arr, index, size) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let max = index;
  
    if (left < size && arr[left] > arr[max]) {
      max = left;
    }
  
    if (right < size && arr[right] > arr[max]) {
      max = right;
    }
  
    if (max !== index) {
      // Swap elements and recursively heapify the affected subtree
      [arr[max], arr[index]] = [arr[index], arr[max]];
      heapify(arr, max, size);
    }
  }

