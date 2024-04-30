// Write a function to find the largest element in an array.

function findLargestElement(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
let arr = [34,56,45,78,18,63]
console.log(findLargestElement(arr));