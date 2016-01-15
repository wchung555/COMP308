module objects {
    export class Student extends Person {
    //private instance vars
    private _studentNumber:number; //names of private vars should start with "_"
    
    //constructor
    constructor(name:string, studentNumber:number) {
        super(name);
        this._studentNumber = studentNumber;
    }
    
    //public methods
    public studies():void {
        console.log(this._name + " is studying");
    }
}
}