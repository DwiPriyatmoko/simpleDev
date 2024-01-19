// 11a = Create an array of number: const nums = [10, 20, 30]; Modify the last value in this array and change it to 99
const nums = [10, 20, 30];
console.log(nums);
nums[2] = 99;
console.log(nums);

function getLastValue(nums) {
	return nums[nums.length - 1];
}

// 11.b = Create a function getLastValue(nums) that takes an array and returns the last value in the array.
function getAnotherLastValue(array) {
	const lastIndex = array.length - 1;
	return array[lastIndex];
}
console.log(getAnotherLastValue([1, 20, 22, 24]));
console.log(getLastValue(["hello", "world"]));

// 11.c = Create a function arraySwap(array) that takes an array and returns an array when the first and last values are swapped (or switched).
function arraySwap(array) {
	const lastIndex = array.length - 1;

	const lastValue = array[lastIndex];
	const firstValue = array[0];

	array[0] = lastValue;
	array[lastIndex] = firstValue;

	return array;
}
console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(["hello", "world"]));

// 11.d = Create a for loop that count from 0 to 10 in increments of 2
for (let i = 0; i <= 10; i += 2) {
	console.log(i);
}

// 11.e = Create a for loop that counts down from 5 to 0
for (let i = 5; i >= 0; i--) {
	console.log(i);
}

// 11.f = Do exercise 11.d and 11.e using a while loop
let i = 0;
while (i <= 10) {
	console.log(i);
	i += 2;
}

let j = 5;
while (j >= 0) {
	console.log(j);
	j--;
}
