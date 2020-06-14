const config = require('../config.js');

exports.todoList = [];
// Accessible through `this.todoList` because `this` is the module itself!

// Method to add a new thing to the list
exports.add = (thingtodo) => {
    // this.todoList is accessing the above array.
    // If the items isn't present (remove duplicates), add it:
    if (this.todoList.indexOf(thingtodo) < 0)
        this.todoList.push(thingtodo);
    // We return our whole module for "chaining" actions. See usage, below.
    return this;
}

// Same deal but we remove the list from its index position.
exports.remove = (thingtodo) => {
    const pos = this.todoList.indexOf(thingtodo);
    this.todoList = this.todoList.slice(pos, 1);
    return this;
}

// A Simple clear function that removes all elements.
exports.clear = () {
    this.todoList = [];
    return this;
}

// This function "gets" all the ToDos:
exports.list = () => {
    // because we return only an array, it can't be chained after.
    return this.todoList;
}

// A "Clean" return of all the ToDos with line returns and numbers!
exports.cleanList = () => {

    // Things used: Array.prototype.map , Array.join, and Template Literals
    return this.todoList.map((item, index) => `${index}. ${item}`).join("\n");
}