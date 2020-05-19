export {};
let message = "hello hey";
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = "What is this";

let isBoolean: boolean = true;
let total: number = 0;
let name: string = "Bry";

let sentence: string = `My name is ${name}`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1.2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ["22", 22]; //the order of the values has to match the order of the types

enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;

let randomValue: any = 10; //does not return any TS error
randomValue = true;
randomValue = "heyyyy";
randomValue();
randomValue.toUpperCase();

let unknownVariable: unknown = 10;
unknownVariable = true;
unknownVariable = "heyyyy";

let a;
a = 10;
a = true;

let b = 20; //validates only as a  number

let multiType: number | boolean;
multiType = 20;
multiType = true;
