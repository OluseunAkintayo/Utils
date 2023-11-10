// build an array
class MyArray {
	constructor() {
		this.length = 0;
		this.data = {}
	}

	get(index) {
		return this.data[index]
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.length;
	}

	pop() {
		if(this.length - 1 >= 0) {
			const lastItem = this.data[this.length - 1];
			delete this.data[this.length - 1];
			this.length--;
			return lastItem;
		}
	}

	delete(index) {
		// const item = this.data[index];
		this.shiftItems(index);
	}

	shiftItems(index) {
		for (let i = index; i < this.length - 1; i++) {
			// shift items to the left
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;
	}
}

const newArray = new MyArray();
newArray.push('hello');
newArray.push('Jameson');
newArray.push('Aiden');
newArray.push('Jonas');
newArray.push(96500);
newArray.push('Cascade');
// newArray.pop();
// newArray.pop();
newArray.delete(4)
// newArray.delete(1)
console.log(newArray);


const nemo = ['nemo'];
// assuming we had a bigger array
const myArr = new Array(10000000);
myArr.fill('jameson');
myArr.push('nemo');

// finding an array entry
const findNemo = (arr) => {
	const t1 = performance.now();
	for (let i = 0; i < arr.length; i++) {
		if(arr[i] === 'nemo') {
			console.log('Found nemo!');
			break; // breaks out of the loop once the condition is met
		}
	}
	const t2 = performance.now();
	// console.log(`Execution time: ${t2 - t1}`);
}
findNemo(nemo);
findNemo(myArr);

// log all pairs of an array
const alphabetsArray = ['a', 'b', 'c', 'd', 'e', 'f'];
const logAllPairs = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			console.log([arr[i], arr[j]]);
		}
	}
	// this algorithm has a Big O of O(n * n) = O(n^2)
}
logAllPairs(alphabetsArray);

const printNumbersAndSums = (numbers) => {
  numbers.forEach((num) => console.log(num + 1));
	
	numbers.forEach(num1 => {
		numbers.forEach(num2 => console.log(`${num1} + ${num2} = ${num1 + num2}`));
	});
}
// this algorithm has a Big O notation of O(n + n^2) which considering the dominant side leaves us with O(n^2);
printNumbersAndSums([1, 3, 5, 7, 9, 11, 15, 30]);


// merge sorted arrays
function mergeSortedArrays(arr1, arr2){
	const mergedArray = [];
	let arr1IndexItem = arr1[0];
	let arr2IndexItem = arr2[0];
	let i = 1;
	let j = 1;

	// check input
	if(!Array.isArray(arr1)){
		throw 'Input is not array';
	}
	if(!Array.isArray(arr2)){
		throw 'Input is not array';
	}
	if(arr1.length === 0) {
		return arr2;
	}
	if(arr2.length === 0) {
		return arr1;
	}
	
	while (arr1IndexItem || arr2IndexItem) {
		if(!arr2IndexItem || arr1IndexItem < arr2IndexItem) {
			mergedArray.push(arr1IndexItem);
			arr1IndexItem = arr1[i];
			i++;
		} else {
			mergedArray.push(arr2IndexItem);
			arr2IndexItem = arr2[j];
			j++;
		}
	}
	
	return mergedArray;
}

const arrayOne = [3,5,7,9];
const arrayTwo = [1,2,3,6,8];
const mergedArray = mergeSortedArrays(arrayOne, arrayTwo);
console.log({ mergedArray });


// given an array of integers and a target value, find twpo numbers whose sum is equal to the target and return the indices of the two numbers

const findTwoSums = (arr, target) => {
  const sumCompliments = new Map();

  if (arr && arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      if (sumCompliments.has(arr[i])) {
        return [sumCompliments.get(arr[i]), i];
      } else {
        const itemSumCompliment = target - arr[i];
        sumCompliments.set(itemSumCompliment, i);
      }
    }
  }
	if(arr && arr.length === 1) {
		return [-1, -1];
	}
};

const myArray = [2, 7, 11, 15];
const myArrayII = [];
for (let i = 0; i <= 50; i++) {
  myArrayII.push(i ** 2);
}
// console.log(findTwoSums(myArray, 14));
console.log(findTwoSums(myArray, 18));
console.log(findTwoSums([2, 2], 4));
