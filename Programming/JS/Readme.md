###### Interpreter:
Translates and reads the files line by line; translates the code directly; quickly gets up and running. The major con of an interpreter is that it's slow, and there is no optimization.

###### Compiler:
Tries to understand what the program is trying to do; takes a little time to get up and running but the code runs faster eventually.

###### Babel:
A JS compiler that takes modern JS code and returns browser-compatible JS code
Typescript - a superset of JS that compiles down to JS

### Call stack and Memory Heap
Memory heap - a place to store info (variables)
Call stack - a portion in memory that reads and runs the code; operates on FILO basis
Memory leak happens when a variable is declared but unused, which is why the idea of global variables is not too good.
JavaScript has a single call stack so it is a single-threaded programming language.
This also means that JavaScript is a synchronous programming language - code is executed in a linear squence where each operation must be completed before the next one can begin.
A stack overflow occurs when the call stack 'overflows'. A good example is a recursive function that runs infinitely.

#### call(), bind() and apply()
All functions have a .call( ) method, it is what lets the function be executed.
```
  function a( ){
    console.log('a');
  }
  a(); is shorthand for a.call();
```

The call( ) method can also be used to 'borrow' a method from another object.

Given two objects:
```
  const wizard = {
    name: 'Merlin',
    health: 60,
    recover: function( ) {
      this.health = 100
    },
    boost: function(param1, param2) {
      this.health += param1 + param2
    }
  }

  const archer = {
    name: 'Robin Hood',
    health: 30
  }
```

Say we want to use Wizard's recover function on archer without creating a new method for archer, we simply do the following:
```
  wizard.heal.call(archer); // this takes archer's health to 100.
```

call( ) and apply( ) perform virtually the same function. One of the key differences is that while the call method receives arguments, the apply( ) method receives an array or arguments.
```
  wizard.boost.call(archer, 50, 70);
  wizard.boost.apply(archer, [50, 70]);
```

The bind( ) method is used to create another instance of a function:
const boostArcher = wizard.boost.bind(archer, 50, 90);
boostArcher( ); // this returns 170

Function Currying - partial arguments
```
  function multiply(x, y) {
    return x * y;
  }

  let multiplyByFour = multiply.bind(this, 4);
  multiplyByFour(3); // returns 3 * 4 = 12;
```


###### Types in JS
1. Numbers
2. Boolean
3. Strings
4. undefined
5. null
6. Symbol - ES6
7. Objects

undefined - absence of a definition;
null - absence of value

###### NB: Primitives have object wrappers, which allows us to use some methods on them. For instance,
true.toString( ) is the same as Boolean(true).toString( )

Primitives are parsed by value, objects are parsed by reference.
For instance:
```
  var a = 2;
  var b = a;
  b++ // returns 3
  a // returns 2
```

On the other hand
```
  var a = {x: 'x', y: 'y'};
  var b = a;
  b.x = '123'
  console.log(b) // returns {x: '123', y: 'y'}
  console.log(a) // returns {x: '123', y: 'y'}
```
This is because a and b are referencing the same object in memory

This is addressed as follows:
```
  var a = {x: 'x', y: 'y'};
  var b = Object.assign({ }, a);
  
  OR

  var b = {...a};
  a.x = '123' // modifies a but not b
```

NB: these methods are shallow copies, to do a deep clone, we do
```
  var b = JSON.parse(JSON.stringify(a));
```

##### Static vs Dynamic Typing
Static - explicitly declare variable and type


### Functions
Functions are first-class citizens in JS
- They can be assigned to variables and object properties
- Can be passed as arguments to another function
- Can be returned as values from another function:
	```
    function a() {
      return function b() {}
    }
    which can be called by the expression
    a()()
	```

<em>NB: Arrow functions are lexically bound; they define 'this' on where they are written.</em>

###### Higher Order Functions
These are functions that take functions as arguments or return another function
<br />

### Closures and Prototypes - the pillars of JS
#### Closures
Closures lets a function access variables in an enclosing scope even after it leaves the scope in which it was declared

#### Prototypes
Inheritance is getting access to the properties and methods of an object

Let's have the following objects for instance

  ```
    let dragon = {
      name: 'Viserys',
      fire: true,
      strength: 100,
      fight() {
        return 90
      },
      sing() {
        return `I am ${this.name} the breather of fire`;
      }
    }

    let lizard = {
      name: 'Lizard',
      fight() {
        return 10
      }
    }
  ```

Usually, we can bind a property of dragon to lizard by simply doing
  ```
    const singLizard = dragon.sing.bind(lizard);
    console.log(singLizard())  // I am Lizard the breather of fire
  ```
If we modify the dragon object to look like this

  ```
    let dragon = {
      name: 'Viserys',
      fire: true,
      strength: 100,
      fight() {
        return 90
      },
      sing() {
        if(this.fire)
          return `I am ${this.name} the breather of fire`;
      }
    }
  ```
Then running the singLizard() function would return 'undefined' as the lizard object does not have the 'fire' property.
We can make an object inherit all the properties and methods of another object by doing
  ```
    lizard.__proto__ = dragon;
    lizard.sing()  // I am lizard the breather of fire
    lizard.fire    // true
  ```
    
Also,
  ```
    dragon.isPrototypeOf(lizard) // true
    lizard.isPrototypeOf(dragon) // false
  ```

### OOP and FP
#### Object-Oriented Programming
The idea behind OOP is to keep the data and its associated behaviours together in one single location called an Object.
##### Four Pillars of OOP 
1. Encapsulation - everything is in an enclosed space/box
2. Abstraction - hiding the complexity from the user
3. Inheritance - D.R.Y., avoid rewriting the same code by having shared methods and properties through class inheritance
4. Polymorphism - calling the same method on different objects and each object responding in s different way
<br />
#### Functional Programming
The idea of functional programming is that data and behaviour are distinct and should be kept separate for clarity.
##### Pure Functions
Pure functions are characterized by two main features:
1. they have no side effects;
2. they return the same output for each corresponding input no matter how many times they are called

<em>NB: Side effects occur when a function modifies data outside of itself</em>
For example:
  ```
    const numArray = [1, 2, 3, 4];
    function mutateArray(arr) {
      arr.pop();
    }
    mutateArray(numArray);
    console.log(numArray) // [1, 2, 3]
  ```
As seen above, the numArray data is mutated after the function runs, this is a side effect.
We can rewrite the function above as follows:
  ```
    const numArray = [1, 2, 3, 4];
    function mutateArrayII(arr) {
      const newArr = [].concat(arr);
      return newArr.pop();
    }
    mutateArrayII(numArray); // returns [1, 2, 3]
    console.log(numArray) // returns the originan array unchanged - [1, 2, 3, 4]
  ```
##### Idempotence
The phenomenom where a function behaves in an expected manner, making our code predictable. For instance:
  ```
    function showNum(num) {
      console.log(num);
    }
  ```
the function above will always return the number it is called with no matter how many times we run it (even though it's not a opure function).

##### Imperative vs Declarative Programming
Imperative code tells the computer what to do and how to do it. jQuery is a good example
Declarative code tells the computer what to do and the results to expect, but not how to do it. React is a good example.

##### Currying
The art of transforming a function that takes multiple parameters into a sequence of functions that take one argument at a time. For instance
  ```
    const multiply = (a, b, c) => a * b * c;
    multiply(2, 3, 4) // returns 24
  ```
can be rewritten as

  ```
    const curriedMultiply = (a) => (b) => (c) => a * b * c;
    curriedMultiply(2)(3)(4) // returns 24
  ```
##### Memoization
Caching is storing copies of data in a temporary storage location so that they can be accessed quickly
Memoization is caching the return value of a function based on its parameters/arguments
Example:
  ```
    const square = (n) => n * n;
    const memoizedFn = () => {
      const cache = {};
      return function() => {
        // check if value exists in cache and return it if it exists
        if(x in cache) {
          return cache[x];
        } else {
          // since value is not in cache, add to cache and return value from cache
          cache[x] = square(x);
          return cache[x];
        }
      }
    }
  ```

##### Compose and Pipe
Making multiple functions act on the same data. Suppose we want to make a data go through a series of mutations defined by different functions, we can compose the functions to act on the data in order.
For example, let's say we want to take a number, mutiply is my 4, take the absolute value of the result, and take the rquare root of the result, we can have something like this:
  ```
    const multiplyByFour = (num) => num * 4;
    const takeAbsolute = (num) => Math.abs(num);
    const takeSqrt = (num) => Math.sqrt(num);
    const compose = (x, y, z) => (data) => x(y(z(data)));
    const finalResult = compose(takeSqrt, multiplyByFour, takeAbsolute)(-16); // returns 8

  ```
Pipe is simply reversing the order in which composed functions are arranged; can be used interchangeably with compose.
<em> NB: Arity is the number of arguments a function takes</em>

#### Key differences beterrn OOP and FP
- OOP performs few operations on common data while FP performs quite many operations on fixed data
- FP is virtually stateless while OOP is stateful
- Methods in OOP (usually) have side effects, functions in FP are mostly pure.
- FP is more declarative (focuses on what should be done), OOP is more imperative (focuses on how what should be done)

### Asynchronous JavaScript
#### Non Blocking and Async Programming
<b>Non-blocking programming</b> is a technique used to improve the responsiveness of an application by allowing it to perform multiple I/O operations simultaneously without blocking. In non-blocking programming, the application doesn’t wait for the completion of a task before moving on to the next task. Instead, it checks the status of each task periodically and only acts on completed tasks.
In <b>asynchronous programming</b>, the application doesn’t wait for the completion of a task before moving on to the next task. However, unlike non-blocking programming, the application doesn’t have to periodically check the status of each task. Instead, it can continue executing other code until the task is complete, and then the application is notified of the completion. Asynchronous programming is often used in applications where I/O operations are frequent, and the application needs to remain responsive. For example, applications that need to perform multiple HTTP requests or interact with databases can benefit greatly from asynchronous programming.
###### Event loop
A tool that monitors the call stack and memory heap.

##### Callbacks
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
<b>Synchronous callbacks</b> are executed at the same time as the higher-order function that uses the callback. Synchronous callbacks are blocking.
<b>Asynchronous callbacks</b> are executed at a later time than the higher-order function. Asynchronous callbacks are non-blocking.

#### Promises
Promises represent an eventual completion or failure of asynchronous tasks which may succeed or fail at some point during their lifetime. A promise may return the following statuses: success, failure or rejected.
- Promises are callback functions.
- An asynchronous function returns a promise
##### Async-await
This is a concept in ES8 built on promises.
For example:
```
  fetch('https://jsonplaceholder.typicode.com/users)
  .then(response => response.json())
  .then(res => console.log(res))
```  

can be rewritten as

```
  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  }
```
##### Job Queue
The job queue is an abstract data structure used by web browsers to keep track of tasks that need to be done. It's essentially just a list.
The order of running JS code after ES6 has been modified thus:
- synchronous code
- Job Queue - Microtask Queue (promises)
- Callback queue - Task Queue

##### Handling Promises
There are three ways of handling multiple promises:
- <b>Parallel</b>: run all at the same time - uses the Promise.all() method
- <b>Sequential</b>: run them one after the other
- <b>Race</b>: fire all requests at the same time, work with the first one that resolves and ignore the rest  - uses the Promise.race() method

###### Promise.all( )
Promise.all( ) only resolves if all the promises resolves. If one of them fails, then it returns an error even if others resolve.
```
  const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 3000));
  const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 3000));
  const promiseThree = new Promise((resolve, reject) => setTimeout(resolve, 3000));
  Promise.all([promiseOne, promiseTwo, promiseThree])
    .then(data => console.log(data))
    .catch(e => console.log('Something went wrong));
  // this logs 'Something went wrong' to the console after three seconds
```
###### Promiss.allSettled( )
To fix the issue with the code above, we use the Promise.allSettled() method - this runs all promises whether resolved or rejected:
```
  const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 3000));
  const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 3000));
  const promiseThree = new Promise((resolve, reject) => setTimeout(resolve, 3000));
  Promise.allSettled([promiseOne, promiseTwo, promiseThree])
    .then(data => console.log(data))
    .catch(e => console.log('Something went wrong));
```
###### Promise.any( )
This resolves if any of the supplied promises is resolved; whichever resolves first is taken by Promise.any(). If none of the promises resolve, Promise.any() throws an error!

### Modules
A module is a JavaScript file that can contain functions and variables. It encapsulates related functionality together in a single place.
