// Coding exercise 1 - given an array/collection of numbers, find a matching pair whose sum is equal to a given number

const numArr1 = [1, 2, 5, 7, 8, 2, 3];

const numArr2 = [3, 4, 6, 9, 2];

const hasPairSumToTen = (arr, sum) => {
	const sumComplimentSet = new Set();
	const matchingPair = new Set();
	for (let j = 0; j < arr.length; j++) {
		if(sumComplimentSet.has(arr[j])) {
			// matchingPair.add(arr[j]);
			return {
				verdict: true,
				matchingPair,
				sumComplimentSet
			};
		} else {
			sumComplimentSet.add(sum - arr[j]);
		}
	}
	return false;
}

console.log(hasPairSumToTen(numArr1, 10));



// Coding exercise 2
// Given two arrays, create a function that checks (true/false) whether the two arrays contain any common items
// e.g., ['a', 'b', 'd'] and ['x', 'c'] would return false
// ['a', 'b', 'd'] and ['d', 'c'] would return true
const containCommonItems = (arr1, arr2) => {
	// 1. loop through first array and create an object where object properties === items in the array
	let obj1 = {};
	// 2. loop through second array and check if items in here exist on the created object above
	if(arr1 && Array.isArray(arr1) && arr1.length > 0) {
		for (let i = 0; i < arr1.length; i++) {
			if(!obj1[arr1[i]]) {
				const item = numArr1[i];
				obj1[item] = true;
			}
		}
	}
	// 3. loop through second array again to see if any of its items are found on the object from step 2
	if(arr2 && Array.isArray(arr2) && arr2.length > 0) {
		for (let j = 0; j < arr2.length; j++) {
			if(obj1.hasOwnProperty(arr2[j])) {
				return true;
			}
		}
	}
	return false;
	// for this function, time complexity is O(n) and space complexity of O(n)
}

console.log(containCommonItems(numArr1, [2]));

// this function can also be written in a shorter form as
function shortFormContainCommonItems(arr1, arr2){
	if(arr1 && arr2) {
		return arr1.some(item => arr2.includes(item));
	}
	return false;
}
console.log(shortFormContainCommonItems(numArr1, null));