var objects;
(function (objects) {
    var Person = (function () {
        //constructor
        function Person(name) {
            this._name = name;
        }
        //public methods (note: return type comes LAST)
        Person.prototype.speaks = function () {
            console.log(this._name + " says Hello");
        };
        return Person;
    })();
    objects.Person = Person;
})(objects || (objects = {}));
//# sourceMappingURL=person.js.map