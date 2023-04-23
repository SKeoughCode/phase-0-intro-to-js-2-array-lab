// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(example) {
    cats.push(example);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat(name) {
    var temp = [...cats];
    temp.push(name);
    return temp;
}

function prependCat(name) {
    var temp = [...cats];
    temp.unshift(name);
    return temp;
}

function removeLastCat() {
    var temp = [...cats];
    temp.pop();
    return temp;
}

function removeFirstCat() {
    var temp = [...cats];
    temp.shift();
    return temp;
}