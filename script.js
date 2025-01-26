const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	 const result = []; // To store the subarrays
  let currentSubarray = []; // Temporary subarray
  let currentSum = 0; // The sum of elements in the current subarray

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

const arr = [1, 2, 3, 4, 1, 0, 2, 2];

// Ask the user for the maximum sum
const n = parseInt(prompt("Enter n: "),5);

// Show the result in an alert box
alert(JSON.stringify(divide(arr, n)));
