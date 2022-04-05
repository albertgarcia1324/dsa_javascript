function bubbleSort(arr) {
  // Implement sort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const less = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = less;
      }
    }
  }
  // Return sorted array
  return arr;
}
