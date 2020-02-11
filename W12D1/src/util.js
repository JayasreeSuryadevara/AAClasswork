const Util = {
    inherits(childClass, parentClass){
        function Surrogate () {};
        Surrogate.prototype = parentClass.prototype;
        childClass.prototype = new Surrogate();
        childClass.prototype.constructor = childClass;
    },
    
    randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },

    // Scale the length of a vector by the given amount.
    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    }

};

// function Animal(name) {
//   this.name = name;
// }

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.bark = function(){
//   console.log("BARK!!");
// }

// Animal.prototype.eat = function(){
//   console.log("Eating");
// };



// Util.inherits(Dog, Animal);
// d = new Dog ("barky");
// a = new Animal("animal");

module.exports = Util;
