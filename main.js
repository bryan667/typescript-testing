"use strict";
exports.__esModule = true;
var message = "hello hey";
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = "What is this";
var isBoolean = true;
var total = 0;
var name = "Bry";
var sentence = "My name is " + name;
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1.2, 3];
var list2 = [1, 2, 3];
var person1 = ["22", 22]; //the order of the values has to match the order of the types
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var randomValue = 10; //does not return any TS error
randomValue = true;
randomValue = "heyyyy";
randomValue();
randomValue.toUpperCase();
var unknownVariable = 10;
unknownVariable = true;
unknownVariable = "heyyyy";
var a;
a = 10;
a = true;
var b = 20; //validates only as a  number
var multiType;
multiType = 20;
multiType = true;
