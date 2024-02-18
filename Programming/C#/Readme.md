#C#

## How the compiler works:

The C# code is compiled into the intermediate language code. This IL code is executed by the .NET engine which compiles it into Assembly code, which in turn is executed by the CPU

## Data Types in C#

C# has two major data types: value types and reference types
Value types contain the specified value and the categories of value types include:

### Value Types

Value types in C# include: `int`, `bool`, `char`, `struct`.

#### Integral numeric types

These have a range of about 4 billion and uses 32 bit of memory; includes int and long

#### floating point numbers

Consists of float (4 bit memory size) and double (8 bit memory size). The decimal type is a type of floating point number that has a precision of 28-29 digits. It also uses about 16 bit of memory. This number type has a smaller range bu better precision compared to float and double data types.

#### Floating point number types:

```
float num_float = 3.1f;
double num_double = 4.3d;
decimal num_decimal = 3.142m;
```

##### Nullable values

Used when a variable is not yet initialized

```
int? int1 = null;
bool? val2 = null;
```

#### Type conversions

##### Implicit conversion

Requires no special syntax, no data or precision loss. For instance, when converting a int to a long type:

```
int age  = 31;
long myAge = age;
```

##### Explicit conversion

Requires type casting, there is potential of data or precision loss.

```
float weight = 73.2f;
int myWeight = (int)weight; // precision is lost
```

#### bool

represents two boolean state - true or false; uses 8 bit of memory

#### char

uses 16 bit of memory. Also, the char type cannot be converted to another numeric type, and also cannot store negative numbers.

##### NB: In C#, we use single quotes for the char data type and double quotes for strings.

### Reference Types

Reference types in C# contain a reference to the value. Included reference types in C# are:

- object
- string
- dynamic

#### Strings

A string is a reference type that stores text as a sequence of char-type objects.
We can use String.length to get the length of a string

##### String interpolation

```
string firstname = "Nick";
string lastname = "Jonas";
string fullName = $"{firstname} {lastname}";
```

##### Substring

Returns part of a string based on starting index and ending index. FOr instance,
fullName.Substring(0,5); // returns Nick

##### String Parsing

You can parse a string into different datatypes using methods like Parse(). For instance, if we are to transform a string into a integral value type, we can do something like this:

```
string myNumberString = "20";
int parsedNumber = int.Parse(myNumberString);
double temp = double.Parse("30.3");
```

###### Note:

Decimals are written in different ways throughout the world. For instance, Germans use a comma as decimal point as illustrated thus:

```
CultureInfo german = new CultureInfo("de-DE");
CultureInfo english = new CultureInfo("en-US");
double temp_de = double.Parse("30.12", german);
double temp_de_II = double.Parse("30,12", german);
double temp_en = double.Parse("30.12", english);
```

In the code above, the decimal point is ignored and `temp_de` returns `3012`. However, both `temp_de_II` and `temp_en`return `30.12`.

## Date and Time

### DateTime Type

- Represents an instant time.
- Year ranges from 1 to 999

```
using System.ComponentModel.DataAnnotations

DateTime dob = new DateTime(1990, 01, 20);
Console.WriteLine(dob);
Console.WriteLine($"Day of week - {dob.DayOfWeek}");
Console.WriteLine($"Today - {DateTime.Today}");
Console.WriteLine($"Current time - {DateTime.Now}");
Console.WriteLine($"Current UTC time - {DateTime.UtcNow}");
```

#### DateTime Parsing

We can parse string into DateTime type by using the `.Parse()` method. Please note that this method also accepts a `CultureInfo` object.

```
using System.Globalization;

DateTime date = DateTime.Parse("1999-02-20");
DateTime dateII = DateTime.Parse("02/20/1999");
DateTime dateIII = DateTime.Parse("20/02/1999", new CultureInfo("en-GB"));
```

#### DateTime Formatting

Formatting DateTime into string follows a similar approach from the section above:

```
using System.Globalization;

DateTime date = new(1999, 12, 31);
Console.WriteLine(date.ToString()); // returns 12/31/1999 12:00:00AM
Console.WriteLine(date.ToString(new CultureInfo("en-GB"))); // returns 31/12/1999 00:00:00
Console.WriteLine(date.ToString("ddd, dd MMM yyyy")); // returns Fri, 31 Dec 1999
Console.WriteLine(date.ToString("dd-MM-yyyy")); // returns 31-12-1999
```

## Conditionals

Conditional statements take the form:

```
if(expresion) {
    execute;
} else {
    alternative code;
}
```

This can also be written as

```
[expression] ? [execute if expression is true] : [execute if expression is false]
```

We can also write conditionals using `switch` statements.

```
Console.WriteLine("Enter your age: ");
string? input = Console.ReadLine();
int age  = int.Parse(input);

switch(age) {
	case < 13:
		Console.WriteLine("Child");
		break;
	case < 20:
		Console.WriteLine("Teenager");
		break;
	case < 50:
		Console.WriteLine("Adult");
		break;
	case > 50:
		Console.WriteLine("Senior citizen");
		break;
	default:
		Console.WriteLine("Infinity");
		break;
}
```

## Loops

There are three main loop techniques in C#:

- while
- do-while
- for

### While Loop

```
int x = 2;
while (x < 5) {
  Console.WriteLine(x);
  x++;
}
```

This prints 2, 3, 4 and the iteration terminates when x reaches 5. The condition is checked before the loop is executed.

### Do-while Loop

In this loop the code is executed before checking for conditions. This implies that the body of a do-while loop will always be executed at least once.

```
int x = 3;
do {
  Console.WriteLine(x);
  x++;
} while(x < 1);
```

### For Loop

This takes the form

```
for (int x = 0; x < 5; x++) {
    Console.WriteLine(x);
}
```

## Variable Scope

There are three variable scopes in C#:

- Class level
- Method level
- Block level (curly braces define a scope in C#)

## Object-Oriented Programming

OOP is a programming paradigm based on the concept of _objects_ which can contain data (attributes or properties) and procedures (methods).

### OOP structure

- Class: data type including properties and methods
- Object: an instance of a class with specified data for the properties
- Property: data field within a class
- Method: a function defined within a class

### OOP Principles

- Encapsulation: data is contained inside an object, and only select information is exposed (information hiding).
- Abstraction: classes expose what they can do, not how they do it.
- Inheritance: derived classes inherit the structure and behavior of the parent class.
- Polymorphism: classes sharing the same structure can be exchanged

Benefits of OOP:

- modularity: data encapsulation births self-contained objects. This simplifies development.
- reusability: classes can be shared across applications.
- productivity: resuable blocks help build applications faster.
  Downsides of OOP:
- too much focus on data and not enough on computation/algorithms, and
- OOP is too lengthy and can get complicated

#### Classes and Objects

Consider the following class:

```
class Person {
    private string \_name;
    private int \_age;
    private string \_gender;

    public Person(string name, int age, string gender) {
        Name = name;
        Age = age;
        _gender = gender;
    }

    public string Name { get; set; }
    public int Age { get; set; }
}
```

To make the class properties accessible outside the class, we introduce the _setter_ and the _getter_. A setter lets you modify a property outside the class, a getter lets you access a property outside the class. If we want to prevent modification of properties for a particular parameter outside the class, we can mark the setter as _private_.

The class can be instantiated as follows: `Person person1 = new Person("Mike", 32, "M");`

We can change the name by simply doing `person1.Name = "New Name";`

##### Methods
Methods are functions that belong to a class. In the `Person` class above, we can declare a `GetName()` method as follows:

```
class Person {
    private string \_name;
    private int \_age;
    private string \_gender;

    public Person(string name, int age, string gender) {
        Name = name;
        Age = age;
        _gender = gender;
    }

    public string Name { get; set; }
    public int Age { get; set; }

    public void GetName() => Console.WriteLine($"Hello, my name is {Name}!");
}
```

##### Access Modifiers
An access modifier specifies the visibility of a member (field or method), i.e. whether they are accessible from other parts of the code. There are four types of access modifiers:
- public: ensures the code can be used from anywhere (within the code).
- private: ensures the code can be used only within the same class.
- protected: ensures the code can be used only in the same class or within a class that is derived from that class
- internal: ensures the code can be used within the same assembly or project but not outside of it.

##### Namespaces
Namespaces - helps group classes just like folders group files in a file system

##### Static Members
When a class is marked as static, you can't create an instance of the class using the 'new' keyword. A class declared as static cannot have non-static properties or methods. A method declared as static cannot have non-static parameters.

#### Interfaces
An interface can be compared to a contract. Every class that implements the interface must meet the terms specified in the interface. An interface can only contain method definitions but no implementations. One cannot create instances of interfaces, and they do not have constructors

#### Method Overloading
This lets us have multiple methods with the same name in the same class. The only difference is in the number or type of parameters. For example:
```
public class Account {
  public decimal Balance { get; set; }
  public string Owner { set; get; }
  public Account(string owner) {
	Owner = owner;
	Balance = 0;
  }

  public Account(string owner, decimal balance) {
	Owner = owner;
	Balance = balance;
  }
}

Account account1 = new("Jameson"); // balance is 0
Account account2 = new("Jameson", 392);
```

#### Inheritance
Inheritance lets us implement classes that reuse and extend and modify the behaviour defined in a parent/base class.
A derived class has access to all fields, methods and properties of the base class as long as the access modifiers are public, protected, or internal. Derived classes do not have access to fields/methods/properties with the private access modifier.
NB: the 'virtual' keyword lets us implement a class property differently in a derived type. For instance:
```
public class PersonII {
  public string Name { get; set; }

  public PersonII(string name) {
    Name = name;
  }

  public virtual string GetId() {
    // the virtual keyword makes this method overrideable
    return Name.Substring(0, 3).ToLower();
  }
}

public class Employee : PersonII {
  public string Role { get; set; }
  public Employee(string name, string role) : base(name) {
    Role = role;
  }

  public override string GetId() {
    return $"{Name}-{base.GetId()}"; // we have changed the implementation of the GetId method inherited from the base class
  }
}
```
##### NB:
- To prevent a class from being used as a base class, we can add the 'sealed' keyword. This will also prevent declaring virtual properties/methods.
- The downside of inheritance is that if we have deeply nested classes and a method or property in the base class changes, then we need to go to every other derived class and make the change.
- As an alternative to inheritance in cases of deep nesting, we can use `composition`. Composition lets us receive another object as a constructor parameter, and we can have multiple conpositions per class.
- The `base` keyword refers to the parent class and can be used to call methods from the parent.


#### Polymorphism: 
An object can have multiple types and can be represented in different forms, this phenomenom is called polymorphism. It lets us refer to an object using any type of its inheritance hierarchy.


### Advanced Variable Scopes
Scope defines the availability of a variable in a program.

### Mini accounting project
```
Console.WriteLine("Welcome to Accounting System 1.1");
Checking checking1 = new("100", 0);
Checking premium1 = new("200", 0);
Console.WriteLine($"Checking account -> ID: {checking1.Id}, Balance: {checking1.Balance}");
Console.WriteLine($"Premium account -> ID: {premium1.Id}, Balance: {premium1.Balance}");

// make deposit
Console.WriteLine("Making deposit...please wait");
Console.WriteLine("Deposit completed!\n");
checking1.Deposit(2000);
premium1.Deposit(4000);
Console.WriteLine($"Checking account -> ID: {checking1.Id}, Balance: {checking1.Balance}");
Console.WriteLine($"Checking account -> ID: {premium1.Id}, Balance: {premium1.Balance}");

// transfer
Console.WriteLine("\nCompleting transfer.........completed!\n");
Transfer.CompleteTransfer(premium1, checking1);
Console.WriteLine($"Checking account -> ID: {checking1.Id}, Balance: {checking1.Balance}");
Console.WriteLine($"Checking account -> ID: {premium1.Id}, Balance: {premium1.Balance}");

// calculate interest
Console.WriteLine("\nCalculating interest...\n");
Console.WriteLine($"Account {checking1.Id} - {checking1.CalculateInterest(3)}, Account {premium1.Id} - {premium1.CalculateInterest(3)}");

// add interest to current balance to get new balance
Console.WriteLine("\nCalculating new balance...\n");
Console.WriteLine($"Checking account -> ID: {checking1.Id}, Balance: {checking1.Balance + checking1.CalculateInterest(3)}");
Console.WriteLine($"Checking account -> ID: {premium1.Id}, Balance: {premium1.Balance + premium1.CalculateInterest(3)}");



public class Checking {
	public string Id { get; set; }
	public decimal Balance { get; set; }
	public Checking(string id, decimal balance) {
		Id = id;
		Balance = balance;
	}

	public decimal Deposit(decimal amount) {
		// Console.WriteLine($"Your account ID is {Id}. Enter the amount you wish to deposit: ");
		// decimal amount = decimal.Parse(Console.ReadLine());
		// Console.WriteLine($"Your new balance is ${Balance + amount}");
		return Balance += amount;
	}

	public decimal CalculateInterest(decimal rate) {
		return Balance * rate * 0.01m;
	}

	public virtual decimal CalculateInterest() {
		return Balance * 1.05m;
	}
}
public class Premium : Checking {
	public Premium(string id, decimal balance) : base(id, balance) { }
	public override decimal CalculateInterest() {
		return Balance * 1.06m;
	}
}

public class Transfer {
	public static void CompleteTransfer(Checking sender, Checking recipient) {
		Console.WriteLine("\n Enter the amount you wish to transfer");
		decimal amount = decimal.Parse(Console.ReadLine());
		
		if(amount > sender.Balance) {
			throw new Exception("Insufficient funds in your account.");
		}  else if (amount <= 0) {
			throw new ArgumentException("Amount must be greater than zero.");
		} else {
			sender.Balance -= amount;
			recipient.Deposit(amount);
		}
	}
}
```


### Implicit Variable Declaration
We can use the `var` keyword to define local variables. When we use the var keyword, the type if inferred from the value. When compiled, the compiler replaces the var keyword with the variable type.

The `const` keyword prevents a variable from being redeclared.  It can only be used for constants and not modifiable variables.

### Garbage Collection
In .NET, the garbage collector is responsible for the following:
- efficiently allocating, managing and freeing memory in .NET applications
- managing memory on the heap
- takes the burden of manually allocating and freeing memory off the developer

### Enumerations
An `emuneration` or `enum` type is a variable type that has a set of named constant values attached. For example:
```
Temperature temp = new(TempUnit.Kelvin, 32);
Console.WriteLine($"{temp.Unit}, {temp.Value}");

enum TempUnit {
	Celsius, Fahrenheit, Kelvin
}

class Temperature {
	public TempUnit Unit { set; get; }
	public int Value { set; get; }
	public Temperature(TempUnit unit, int value) {
		Unit = unit;
		Value = value;
	}

	public int CelsiusValue {
		get {
			return Unit switch {
				TempUnit.Celsius => Value,
				TempUnit.Fahrenheit => (Value - 32) * 5 / 9,
				TempUnit.Kelvin => Value - 273,
				_ => 0,
			};

			// the above block is a switch expression. It can be written as a switch statement thus:
			
			// switch(Unit) {
			// 	case TempUnit.Celsius:
			// 		return Value;
			// 	case TempUnit.Fahrenheit:
			// 		return (Value - 32) * 5/9;
			// 	case TempUnit.Kelvin:
			// 		return Value - 273;
			// 	default:
			// 		return 0;
			// }
		}
	}
}
```

### Structs
A struct or structure type is a value type that encpsulates data and functionality. They are created the same way classes are created, except that the `class` keyword is changed to `struct`.
- they can be used with low-level systems such as hardware programming
- structs live on the stack and not the heap
- structs are immutable and used for small data types containing a few properties only
- structs are value types, classes are reference types
- structs should be used only when needed, such as when dealing with system behaviours. Classes are preferred.
#### Limitations
- structs cannot inherit from other classes or structs
- structs cannot be used as a base class. However, they can implement interfaces.

### Passing Value-Type Parameters
- When passing parameters by value, changes made inside methods do not affect original variables outside the method. This is because we get a copy of the data in the method hence, all changes made in the method are not available outside of it.
- C# uses pass-by-value by default
For instance:
```
Rectangle rectangle = new(200, 400);
Console.WriteLine($"Rectangle length: {rectangle.Length}"); // returns 200
MethodParams.ChangeHeight(rectangle); // returns 500 within the method
Console.WriteLine($"New rectangle length: {rectangle.Length}"); // returns 200

public struct Rectangle {
	public double Width { get; set; }
	public double Length { get; set; }
	public Rectangle(double length, double  width) {
		Width = width;
		Length = length;
	}
}

public class MethodParams {
	public static void ChangeHeight(Rectangle rectangle) {
		rectangle.Length = 500;
		Console.WriteLine($"Length in method: {rectangle.Length}");
	}
}
```
#### NB:
Value types can also be passed by reference by adding the `ref` keyword  to the parameter. This lets us change an instance of the struct within the method as seen below:
```
Rectangle rectangle = new(200, 400);
Console.WriteLine($"Rectangle length: {rectangle.Length}"); // returns 200
MethodParams.ChangeHeight(ref rectangle); // returns 500
Console.WriteLine($"New rectangle length: {rectangle.Length}"); // returns 500 since it was passed by reference

public struct Rectangle {
	public double Width { get; set; }
	public double Length { get; set; }
	public Rectangle(double length, double  width) {
		Width = width;
		Length = length;
	}
}

public class MethodParams {
	public static void ChangeHeight(ref Rectangle rectangle) {
		rectangle.Length = 500;
		Console.WriteLine($"Length in method: {rectangle.Length}");
	}
}
```

### Passing Reference-Type Parameters
- In this scenario, access to the variable with be passed to the method.
- Changes made within the method are visible to the caller because we use the same reference inside and outside the method
```
Rectangle rectangle = new(200, 400);
Console.WriteLine($"Rectangle length: {rectangle.Length}"); // returns 200
MethodParams.ChangeHeight(rectangle); // returns 500
Console.WriteLine($"New rectangle length: {rectangle.Length}"); // returns 500

public class Rectangle {
	public double Width { get; set; }
	public double Length { get; set; }
	public Rectangle(double length, double  width) {
		Width = width;
		Length = length;
	}
}

public class MethodParams {
	public static void ChangeHeight(Rectangle rectangle) {
		rectangle.Length = 500;
		Console.WriteLine($"Length in method: {rectangle.Length}");
	}
}
```

## Exception Handling
This lets developers transfer control from the where the error occurs to another point where it is handled.
```
try {
  // potential exception throwing code
} catch(Exception exception) {
  // handle the exception
} finally {
  // runs regardless
}
```
Exception handling should only be used to deal with exceptional (read unexpected) cases.
## Arrays and Collections
Arrays and collections lets us handle grouping, ordering, storing and accessing objects.
- Arrays are defined using square brackets `[]`
- An array size must be defined upon initialization and cannot be changed thereafter. This restriction makes them less flexible.
- Collections provide more flexibility
- items can be easily added to and removed from collections

### Arrays
- Arrays are memory-efficient and can be used when we know the number of elements
- Accessing data in arrays is quite fast when using an indexer
- Searching for a specific element is expensive in large arrays. Same as adding, removing or inserting elements.
```
int [] myArr = new int[3];
myArr[0] = 3;
myArr[1] = 14;
myArr[2] = 9;
Console.WriteLine(myArr[2]);
Console.WriteLine(myArr[3]); // throws an 'index out of bounds exception'

// We can also initilize arrays thus
var myArr2 = new int[] {1, 4, 8};
//  or
int[] myArr3 = {3, 5, 1};
```

#### ArrayList
ArrayList is a noon-generic collection of objects. It dynamically grows and shrinks as needed. The downside is that we cannot specify the type of elements in an ArrayList.

#### Generic List (`List<T>`)
Generic list is a strongly typed collection.
```
var persons = new List<Person>();
var person1 = new Person("Jameson");
var person2 = new Person("Kono");
var person3 = new Person("Malcolm");
persons.Add(person1);
persons.Add(person2);
persons.Add(person3);
Console.WriteLine(persons[0].Name); // returns Jameson
```

#### Generic Stack (`Stack<T>`)
- The generic Stack is a strongly-typed collection that implements the Last-In, First-Out principle.
- The `push` method adds an item to the stack
- The `pop` method removes an item from the stack
- The `peek` methos lets us look at the item at the top of the stack without removing it
- An enumerator such as `foreach` can be used on a Stack
- Stacks are preferrable if the order is important
- Stacks have no indexer, which means you cannot access an element at an index using `stack[i]`
```
var countries  = new Stack<string>();

countries.Push("USA");
countries.Push("Germany");
countries.Push("England");
countries.Push("Russia");

Console.WriteLine(countries.Peek());
Console.WriteLine(countries.Pop());
countries.Push("Indonesia");
Console.WriteLine(countries.Pop());
```


#### Generic Queues (`Queue<T>`)
- The generic queue is a strongly-typed collection that implements the First-In, First-Out principle, i.e. the oder in which items are added to the queue is retained
- The `Enqueue` method adds an item to the queue
- The `Dequque` method removes the next item from the queue
- The `Peek` method is used to look at the next item without removing it from the queue
- Enumerators can be used on Queues
- We cannot access items in the middle of the queue (no indexer)
```
var messages = new Queue<string>();
messages.Enqueue("Jameson is online");
messages.Enqueue("Pam is offline");
messages.Enqueue("Mike is available");

while (messages.Count > 0) {
	var message = messages.Dequeue();
	Console.WriteLine(message);
}
```

#### Generic Dictionary (`Dictionary<TKey, TValue>`)
- It accepts teo generic type argiments
- A dictionary provides a key-value pair
- The keys are unique
- Items can be added using the `dictionary.Add(key, value)` method
- Items can also be added using the `dictionary.TryAdd(key, value)` method. This checks if an item with the speified key already exists before proceeding to add it to the dictionary.
- Items can be removed using the `dictionary.Remove(key)` method
- Items can be accessed using the indexer `dictionary[key]` or by calling the `TryGetValue(key, our var value)` method
- The `dictionary.Keys` returns a list of all keys in the dictionary
- The `dictionary.Values` returns a list of all values in the dictionary
- The `dictionary.ContainsKey(key)` checks if an item with the specified key is in the dictionary
- The `dictionary.Values` returns a list of all values in the dictionary
- Adding and removing items are fast operations.
- Accessing items using keys is faster with a dictionary (largely because of unique keys) compared to accessting a `List<T>`. The difference becomes quie noticable as the size grows.
- A dictionary can be used as a staic or dynamic lookup table
```
var grades = new Dictionary<int, string>{
	{ 6, "Perfect" },
	{  5, "Excellent" },
	{ 4, "Good" }
};

Console.WriteLine(grades[4]);
grades.TryAdd(4, "Almost");
Console.WriteLine($"\n{grades[4]}");

try {
	var item = grades[2];
	Console.WriteLine(item);
}
catch (System.Exception exception) {
	Console.WriteLine(exception.Message);
}

foreach (var grade in grades ) {
	Console.WriteLine(grade);
}
```