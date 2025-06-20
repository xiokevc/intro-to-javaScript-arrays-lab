/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = []; // identifies variable 'foods'

console.log('Exercise 1 Result:', foods); // result: array 0

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

// references array from Exercise 1
foods.push('pizza'); // adds variable 'pizza'
foods.push('cheeseburger'); // adds variable 'cheeseburger'

// push returns variable to end of array sequence

console.log('Exercise 2 Result:', foods); // result: [pizza, cheeseburger]

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

// references array from Exercise 2
foods.unshift('taco'); 

// unshift returns variable to the beginning of the array

console.log('Exercise 3 Result:', foods); // result: ['taco', 'pizza', 'cheeseburger']

/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

const favFood = foods[1]; // adds variable 'favFood' and returns as second variable within array sequence

console.log('Exercise 4 Result:', favFood);// result: 'pizza'

/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/

foods.splice(2, 0, 'tofu'); 

// splice places new variable 'tofu' in specified location within the array

console.log('Exercise 5 Result:', foods);// result: ['taco', 'pizza', 'tofu', 'cheeseburger']

/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

foods.splice(1, 1, 'sushi', 'cupcake');

// splice places new variables 'sushi' & 'cupcake' in specified location within the array

console.log('Exercise 6 Result:', foods);// result: ['taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger']

/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/

const yummy = foods.slice(1, 3); // identifies variables 1 & 3 in array sqecuences and assigns them to a new variable with the name of 'yummy'

console.log('Exercise 7 Result:', yummy);// result: ['sushi', 'cupcake']

/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

const soyIdx = foods.indexOf('tofu');// identifies variable of 'tofu' as 'soyIdx' and locates position of variable within the sequence of given array

console.log('Exercise 8 Result:', soyIdx);// result: 3

/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/

const allFoods = foods.join(' -> ');// seperates each variable within sequence with given parameters

console.log('Exercise 9 Result:', allFoods);// result: taco -> sushi -> cupcake -> tofu -> cheeseburger

/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/

const hasSoup = foods.includes('soup');// searches for variable within array to determine if true/ false

console.log('Exercise 10 Result:', hasSoup);// result: false

/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 !== 0) {
    odds.push(nums[i]);
  }
}

console.log('Exercise 11 Result:', odds);// result: [5, 23, 15, 21, 9, 45, 7, 81]

/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/

// reference array from exercise 11
// const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

const fizz = [];
const buzz = [];
const fizzbuzz = [];

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  const d3 = num % 3 === 0;
  const d5 = num % 5 === 0;

  if (d3) { // divisible by 3
    fizz.push(num);
  }
  if (d5) { // divisible by 5
    buzz.push(num);
  }
  if (d3 & d5) { // divisible by 3 & 5
    fizzbuzz.push(num);
  }
}

console.log('Exercise 12 Results:'); 
console.log('fizz:', fizz);// results: [15, 21, 72, 9, 45, 66, 81, 90]
console.log('buzz:', buzz);// results: [100, 5, 15, 45, 90]
console.log('fizzbuzz:', fizzbuzz);// results: [15, 45, 90]

/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const numList = numArrays[numArrays.length - 1];

console.log('Exercise 13 Result:', numList);// result: [7, 81, 90]

/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/

// reference array from Exercise 13
// const numArrays = [
// 	[100, 5, 23],
// 	[15, 21, 72, 9],
// 	[45, 66],
// 	[7, 81, 90]
// ];

const num = numArrays[2][1];

console.log('Exercise 14 Result:', num);// result: 66

/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/

// reference array from Exercise 13
// const numArrays = [
// 	[100, 5, 23],
// 	[15, 21, 72, 9],
// 	[45, 66],
// 	[7, 81, 90]
// ];

let total = 0;

numArrays.forEach(innerArray => {
  innerArray.forEach(number => {
    total += number;
  });
});

console.log('Exercise 15 Result:\n', total);// result: 534
