#### Interface
An interface is similar to a contract. It specifies things that need to be done but not how they should be done.
For example:

```
interface Area {
  area(): number;
}

interface Perimeter {
  perimeter(): number;
}

class Rectangle implements Area, Perimeter {
  length: number = 12;
  width: number = 6;
  perimeter(): number {
    return (this.length + this.width) * 2;
  }
  area(): number {
    return this.length * this.width;
  }
}

const myRectangle = new Rectangle();
console.log(myRectangle.area());
console.log(myRectangle.perimeter());
```
Note that a class can implement more than one interface.

#### Iterators
We can loop over an object or array of items by using the `for...of` loop: For example:
```
const alpha = [1, 3, 5, 6, 3, 8, 2];

for (let item of alpha) {
  console.log({ item });
}
```

#### Maps
A map is a data structure that associates one piece of data with another piece of data using a key. It makes locating data much faster than an array as it uses a key-value pair to store data.
Map methods:
- instantiation: `const map: Map<key, value> = new Map()`.
- add new item to map: `map.set(key, value)`
- find an item in a map using its key: `map.get(key)`
- delete an item from a map: `map.delete(key)`
- check if a key exist: `map.has(key)`
- clear all map entries: `map.clear()`

#### Exceptions
Exceptions occur when something goes wrong in our code or when something outside of our control happens, for example, running out oe memory, losing internet connectivity, dividing by zero.
For example:
```
const divide = (lhs: number, rhs: number): number => {
  if (rhs === 0) throw new Error("Cannot divide by zero"); // Throwing an instance of 'Error'.
  return lhs / rhs;
};

try {
  const num = divide(10, 0);
  console.log({ num })
} catch (error) {
  console.log(error);
} finally {
  console.log('This is executed regardless of whether an exception was thrown or not');
}
```

#### Type Assertions
This is simply telling typescript what type a data is.

```
const greeting: unknown = "Random Character"; // here we are not so sure of the data type
const greet = greeting as string; // here we are sure of the data type
```


##### Union Type
Used to provide a possible list of data types that may be encountered at that location. For instance:
```
type Color = 'red' | 'blue' | 'pink';
const setColor = (c: Color) => {
  return c;
}

setColor('blue'); // works
setColor('green') // throws an error

let x: number | boolean;
x = false; // works
x = 34; // works
x = 'Pink' // doesn't work
```

##### Type Predicates
These are functions that returns true/false based on some condition. This can be used in type guards for conditional statements. For instance:
```
interface Square {
  kind: 'square';
  size: number;
}

interface Circle {
  kind: 'circle';
  radius: number;
}

type Shape = Square | Circle;

const isSquare = (shape: Shape): shape is Square => shape.kind === "square";

const isCircle = (shape: Shape): shape is Circle => shape.kind === "circle";

const calculateArea = (shape: Shape) => {
  if(isSquare(shape)) {
    console.log('Area of the square is ', shape.size ** 2);
  } else if(isCircle(shape)) {
    console.log('Area of the circle is ', Math.PI * Math.pow(shape.radius, 2));
  } else {
    throw new Error("Unknown shape");
  }
}

const circle: Shape = { kind: 'circle', radius: 4 }
const square: Shape = { kind: 'square', size: 12 }

calculateArea(circle);
calculateArea(square);
```

##### Optional Fields
There are situations where we're dealing with objects and some fields are missing, in those cases we can mark the fields as optional. To make a field optional, we simply add a question mark. For example:
```
interface Product {
  name: string;
  quantity: number;
  warranty?: boolean
}
```
In this case, the warranty field is optional so typescript will not throw any error if the field is absent.

##### Discriminated Unions
Suppose you want to return some kind of message when a usee tries to create an account on your platform, and suppose there are three categories for these messages: success, password complexity notification, and for an existing username. We can do this in TS using discrimintated unions:


### Generics
Suppose we want to get the first number in an array of numbers, we can write a function thus:
```
const getFirstNumber = (arr: number[]): number  | undefined => {
  if(arr.length > 0) return arr[0];
  return undefined;
}
```
This function works for arrays of numbers but it doesn't work with other types like strings or objects. If we want to make this more 'generic', i.e., return more than one data type, we can write the function as:
```
 function getFirst<T>(arr: T[]): T | undefined {
  if(arr.length > 0) return arr[0];
	return undefined;
}
```
