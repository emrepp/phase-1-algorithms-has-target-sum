function hasTargetSum(array, target) {

  for(let i = 0; i < array.length; i++) {

    const complement = target - array [i];

    for (let j = i +1; j < array.length; j++) {
      if (array[j] === complement) return true;
    }

   
    
  }

  

return false;
  // Write your algorithm here

}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  Declare function hasTargetSum passing array and target as parameters
  Use a hashmap to store what has been seen so far, declare it to variable
  attach the length to a variable as well so it is not caluclated with each check
  write a for loop - starting at 0, as long as index is less than the length, increment through the array

  start at index zero when looping through the array, go until the end of the array, and increment it one value each pass.
  The first number is equal to where i starts, the second number checks i and subtracts it from the target to know the number 
  needed. 
  Ask the hashmap if the number needed exists
  return an array with the first index and index of the second number



*/

/*
  Add written explanation of your solution here
  We are trying to find two numbers that add up to the target and return their indices.


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
