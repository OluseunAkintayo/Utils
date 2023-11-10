// Hash tables
const user = {
	age: 33,
	name: 'Mike',
	magic: true,
	health: 100,
	recover() {
		this.health = 100;
	}
}

class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}

	set(key, value) {
		let address = this._hash(key);
		if (!this.data[address]) {
			this.data[address] = [];
			this.data[address].push([key, value]);
		}
		this.data[address].push([key, value]);
		return this.data;
		// time complexity - O(1)
	}

	get(key) {
		let address = this._hash(key);
		const currentBbucket = this.data[address];
		if(currentBbucket) {
			for (let i = 0; i < currentBbucket.length; i++) {
				if (currentBbucket[i][0] === key) {
					console.log(currentBbucket[i][1]);
					return currentBbucket[i][1];
				}
			}
		}
		// this operation is mostly considered as an algoritm with time complexity O(1);
	}
}

const table = new HashTable(20);
// table._hash('mykey');
table.set('Mikelson', 1000);
table.set('Nick', 900);
table.set('Jameson', 489);
table.get('Jameson');