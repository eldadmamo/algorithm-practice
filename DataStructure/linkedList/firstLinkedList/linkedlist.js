let head = null;

function addFirst(val) {
  const newNode = { data: val, next: head };
  head = newNode;
}
  