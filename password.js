
const password = "Rainbow123"

let long = false;
let number = false;
let upper = false;
let lower = false;
let space = false;


if (password.length >= 10){
    long = true;
}

//console.log(password.length)

let numTest = /\d/.test(password);
let lowTest = /[a-z]/.test(password);
let UppTest = /[A-Z]/.test(password);
let spaceTest = /\s/.test(password);

if(numTest) { number = true;}
if(lowTest) { lower = true}
if(UppTest) { upper = true}
if(!spaceTest) { space = true}

 if (number && upper && lower && space){
    console.log(`Password accepted!`)
 } else {
    if (!long) {console.log("This password needs to be longer")}
    if (!number) {console.log("This password needs numbers")}
    if (!lower) {console.log("This password needs lowercase letters")}
    if (!upper) {console.log("This password needs upper letters")}
    if (!space) {console.log("This password cannot have spaces")}
 }