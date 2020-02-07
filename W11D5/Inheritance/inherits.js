function Person(name) {
    this.name = name;
}

Person.prototype.talk = function () {
    console.log(`Hello my name is: ${this.name}`);
};

function Child(name) {
    this.name = name;
}

Child.prototype.move = function(){
    console.log(`${this.name} moves`);
}

Function.prototype.inherits = function(parent_obj) {
    function Surrogate() {};
    Surrogate.prototype = parent_obj.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

Child.inherits(Person);
let child = new Child("Child 1");
child.talk();

