class Student{
    constructor(name){
        this._name = name;
    }
    set setName(name){
        this._name = name;
    }
    get getName(){
        return this._name;
    }
}

export default Student;