How the compiler works:

The C# code is compiled into the intermediate language code. This IL code is executed by the .NET engine which compiles it into Assembly code, which in turn is executed by the CPU

Data Types in C#
C# has two major data types: value types and reference types
Value types contain the specified value and the categories of value types include:
* integral numeric types - 
* floating point numbers - consists of float (4 bit memory size) and double (8 bit memory size). The decimal type is a type of floating point number that has a precision of 29-29 digits. It also uses about 16 bit of memory.
* bool - represents two boolean state - true or false; uses 8 bit of memory
* char - uses 16 bit of memory. Also, the char type cannot be converted to another numeric type, and also cannot store negative numbers.

NB: In C#, we use single quotes for the char data type and double quotes for strings.

Floating point number types:
float num_float = 3.1f;
double num_double = 4.3d;
decimal num_decimal = 3.142m;

nullable values - used when a variable is not yet initialized
int? int1 = null;
bool? val2 = null;


Type conversions
• Implicit conversion - no special syntax, no data or precision loss
For instance, when converting a int to a long type
int age  = 31;
conversion:
long myAge = age;

• Explicit conversion - requires type casting, there is potential of data or precision loss.

float weight = 73.2f;
int myWeight = (int)weight; // precision is lost

Strings
A string is a reference type that stores text as a sequence of char-type objects.


Variable Scope
• Class level
• Method level
• Block level - curly braces define a scope in C#


OOP
The structure of OOP includes:
• Property: data field within a class
• Method: a function defined within a class
• Class: data type including properties and methods
• Object: an instance of a class with specified data for the properties

OOP Principles:
• Encapsulation: data is contained inside an object
• Abstraction: classes expose what they can do, not how they do it
• Inheritance: derived classes inherit the structure and behavior of the parent class
• Polymorphism: classes sharing the same structure can be exchanged
Benefits of OOP include modularity and reusability
Downsides of OOP include:
* too much focus on data and not enough on computation/algorithms, and 
* OOP is too lengthy

Classes and Objects:
A setter lets you modify a property outside the class, a getter lets you access a property outside the class.

For instance, in the following class:

class Person {
	private string _name;
	private int _age;
	private string _gender;
	public Person(string name, int age, string gender) {
		Name = name;
		Age = age;
		_gender = gender;
	}

	public string Name { get; set; }
	public int Age { get; set; }
}

the class can be instantiated as follows:
Person person1 = new Person("Mike", 32, "M");

We can change the name by simply doing: person1.Name = "New Name";

If we want to prevent setting name outside the class, we can mark the setter keyword as 'private': public string Name { get; private set; }

Namespaces - helps group classes.

The 'Static' keyword:
When a class is marked as static, you can't create an instance of the class using the 'new' keyword. A class declared as static cannot have non-static properties or methods. A method declared as static cannot have non-static parameters.

Interfaces
An interface can be compared to a contract. Every class that implements the interface must meet the terms specified in the interface. An interface can only contain method definitions but no implementations. One cannot create instances of interfaces, and they do not have constructors


Inheritance
Inheritance lets us implement classes that reuse and extend and modify the behaviour defined in a parent/base class.
A derived class has access to all fields, methods and properties of the base class as long as the access modifiers are public, protected, or internal. Derived classes do not have access to fields/methods/properties with the private access modifier.
NB: the 'virtual' keyword lets us implement a class property differently in a derived type. For instance:

public class PersonII
{
    public string Name { get; set; }

    public PersonII(string name)
    {
        Name = name;
    }

    public virtual string GetId()
    {
        return Name.Substring(0, 3).ToLower();
    }
}

public class Employee : PersonII
{
    public string Role { get; set; }
    public Employee(string name, string role) : base(name)
    {
        Role = role;
    }

    public override string GetId()
    {
        return $"{Name}-{base.GetId()}"; // we have changed the implementation of the GetId method inherited from the base class
    }
}


NB: To prevent a class from being used as a base class, we can add the 'sealed' keyword. This will also prevent declaring virtual properties/methods.

public class sealed Person { }


Polymorphism: an object can have multiple types and can be represented in different forms

Implicit Variable Declaration
We can use the 'var' keyword to define local variables. When compiled, the compiler replaces the var keyword with the variable type.

The 'const' keyword prevents a variable from being redeclared.

An Enum has a set of named, constant values attached



