function swapHeadAndTail(arr) {
    var middle = Math.floor(arr.length / 2);
    var head = arr.slice(0, middle);
    var tail = arr.slice(-middle);
  
    if (arr.length % 2 !== 0) {
      tail.push(arr[middle]);
  }
  
  return tail.concat(head);
}