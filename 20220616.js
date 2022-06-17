// Ruby and Javascript let you re-open classes so you can add new functionalities to existing classes and objects.
// To demonstrate this, you'll have to add a new method (myNewMethod in JS) into the String class that simply calls the upcase method (toUpperCase() in Javascript), so that:
// JS
// "abc".myNewMethod();
// returns
// "ABC"

String.prototype.myNewMethod = function () {
    return this.toUpperCase();
};