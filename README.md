# TypeScript Essentials

## 1. Differences Between `interface` and `type`.
1. The type alis can be used for all premitive and non-premitive type declaration. But interface is only for  object types (non-primitive).
2. We can merge interfaces with `extends`. For `type` we need to use intersection(&).
```ts
type User1 = {
  id: number;
  name: string;
};

// Extending the User1 type
type Student1 = User1 & {
  email: string;
};

interface User2 {
  id: number;
  name: string;
}
// Extending the User2 interface
interface Student2 extends User2 {
  email: string;
}

```
3. An interface can have multiple merged declarations, but a type alias for an object type literal cannot.
4. Unlike a type alias, an interface can be defined multiple times, and will be treated as a single interface.
5. Because of declaration merging, interfaces are more extensible, especially when working with third-party libraries.



## What is the use of the `keyof` keyword in TypeScript? Explain with example.

The `keyof` keyword in TypeScript is used to create a union of all the property names (keys) of a given type. 
It allows access to object properties.

### Example:
```ts
//Example1:
type User = {
  id: number;
  name: string;
  email: string;
};

type UserKeys = keyof User; // "id" | "name" | "email"

//Example2:
//In the example below we have a Person type.
//And now we want to check all the available properties dynamicaly and create a new type Person2.
//If the key is string type then it will keep the previous type, if its not a string then it will be changed to boolean.
type Person = {
  name: string;
  id: number;
  isMale: boolean;
};

type Person2 = {
  [key in keyof Person]: Person[key] extends string ? "string" : "boolean";
};
```
