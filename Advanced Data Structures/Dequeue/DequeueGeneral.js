function isEmpty() {
    return this.front === null;
}

function getRear() {
    if (this.isEmpty()) {
      return -1;
    }
    return rear.data;
}
