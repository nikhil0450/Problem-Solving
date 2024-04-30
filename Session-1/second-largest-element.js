// Write a function to find the second largest element in an array.

function secondLargestElement(arr) {
  if (arr < 2) return undefined;

  let max = arr[1];
  let secondMax = null;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      arr[i] = secondMax;
    }
  }
  return secondMax;
}

let arr = [10, 7, 18, 45, 9, 63];
console.log(secondLargestElement(arr));
