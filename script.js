const arr = [1, 2, 3, 4, 1, 0, 2, 2];  // Define the array
const n = 5;  // Define the maximum sum for each subarray

const divide = (arr, n) => {
  const result = []; // To store the subarrays
  let currentSubarray = []; // Temporary subarray
  let currentSum = 0; // The sum of elements in the current subarray

  // Iterate through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Check if adding the current element exceeds the limit n
    if (currentSum + arr[i] <= n) {
      // If not, add the element to the current subarray
      currentSubarray.push(arr[i]);
      currentSum += arr[i];
    } else {
      // If adding the element exceeds n, push the current subarray to result
      result.push(currentSubarray);
      // Start a new subarray with the current element
      currentSubarray = [arr[i]];
      currentSum = arr[i];
    }
  }

  // Push the last subarray if it exists
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

// Call the divide function with the array and maximum sum n
console.log(divide(arr, n));  // Output: [[1, 2], [3], [4, 1, 0], [2, 2]]