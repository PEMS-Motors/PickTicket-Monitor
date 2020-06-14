const config = require('../config.js');
const tasks = require("./todo.js");

exports.todo = (client, message, args) => {
    console.log(tasks.cleanList()) // outputs an empty string

    // Add Milk
    tasks.add("Milk");

    // Add Bread, add butter, remove bread
    tasks.add("Bread").add("Butter").remove("Bread");

    console.log(groceries.cleanList());
    /*
    1. Milk
    2. Butter
    (notice the absense of Bread since it was removed)
    */

    // I can also add things manually if I want to but it can be bad!
    tasks.todoList.push("Butter");

    // Duplicate because I didn't check for that, `add()` does.
    console.log(groceries.list()); // ["Milk", "Butter", "Butter"]

    tasks.clear(); // it's now empty!
}