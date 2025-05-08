function search(root, key) {
    if (root === null) {
      return false;
    }
    if (root.data === key) {
      return true;
    }
    if (root.data < key) {
      return search(root.right, key);
    } else {
      return search(root.left, key);
    }
  }