// reverse a string
const reverse = (str) => {
	let reversedString = '';
	if(str && typeof str === 'string' && str.length > 1) {
		for(let i = str.length - 1; i >= 0; i--){
			reversedString += str[i];
		}
		console.log(reversedString);
	}
}

reverse('ABCDE');

const reverseII = (str) => {
	if(!str || typeof str !== 'string' ||  str.length < 2) {
		console.log('Invalid input')
	} else {
		const splitStrArray = str.split('');
		const reversedStrArray = [];
		for (let i = str.length - 1; i >= 0; i--) {
			reversedStrArray.push(splitStrArray[i]);
		}
		console.log(reversedStrArray.join(''));
	}

}

reverseII('asdfghjkl');

const reverseIII = (str) => {
	if(!str || typeof str !== 'string' ||  str.length < 2) {
		console.log('Invalid input')
	} else {
		const reversedString = str.split('').reverse().join('');
		return reversedString
	}
}

console.log('reverse iii ->', reverseIII('asdfghjkl'));

const reverseIV = (str) => [...str].reverse().join('');
console.log('reverse iv ->', reverseIV('asdfghjkl'));