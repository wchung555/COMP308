module objects {
    export class Person {
    //protected instance vars (note: type declaration comes LAST)
    protected _name:string;
    
    //constructor
    constructor(name:string) {
        this._name = name;
    }
    
    //public methods (note: return type comes LAST)
    public speaks():void {
        console.log(this._name + " says Hello");
    }
}
}