/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = 
arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      // swap the elements
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }
  // swap the pivot with the element at the swap index
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
  return swapIndex;
}
{}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right
    = arr.length - 1) {
    if (left < right) {
        // get the pivot index
        let pivotIndex = pivot(arr, left, right);
        // recursively call quickSort on the left and right sides of the pivot
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
    }
 {}

module.exports = quickSort;