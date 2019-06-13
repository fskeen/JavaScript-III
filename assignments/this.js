/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: When you're in the global scope (meaning, not within a function or object or something else that changes the binding of this) this will default to pointing at the window.
* 2. Implicit binding. When you use a function as a method, the object you're calling the function on (which is to the left of the dot) has implicitly bound the "this" keyword.
* 3. New binding: When a constructor is used, the this is bound to the new object that's created. It's implicit binding, you're just making the object as the "this" is bound.
* 4. Explicit binding: You can override implicit binding with several techniques, which is called explicit binding. You'd use .call() or .apply() to apply a new context.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayhello() {
    return "Hello " + this;
  }
  console.log(sayhello("Faye")); // the this points to the window despite invoking with "Faye" because the "this" is referencing the window. 

// Principle 2

// code example for Implicit Binding

const rainbow = {
    color: "Rainbows have all colors!",
    talk: function () {
        console.log(this.color)
    }
}

rainbow.talk() // the this points to the "rainbow" object that .talk() is called on

// Principle 3

// code example for New Binding

function CatMaker(name, sound) {
    this.sound = sound;
    this.name = name;
    this.speak = function () {
        console.log(`${this.name} says '${this.sound}'. You should give them a treat!`)
    }
}

const princessCaroline = new CatMaker("Princess Caroline", "meow"); // I'm making a new cat object using a constructor class.
const china = new CatMaker("China", "mrrRRm");

princessCaroline.speak();
china.speak(); 

// Principle 4

// code example for Explicit Binding

china.speak.apply(princessCaroline); // I'm applying the "princessCaroline" context to the "china" object, overriding the implicit binding that would normally happen