import Kelas from "./kelas"

class Bootcamp{
    constructor(name){
        this._name = name;
        this._classes = [];
    }
    get getName() {
        return this._name;
    }
    set setName(name) {
        this._name = name;
    }
    get classes(){
        return this._classes;
    }
    set setClasses(classes) {
        this._classes = classes;
    }
    createClass(name, level, instructor){
        let newClass = new Kelas(name, level, instructor);
        this._classes.push(newClass);
    }
    register(kelasName, newStud){
        let targetClass = this._classes.find((element) => element.name === kelasName);
        targetClass.setStudent(newStud);
    }
}

export default Bootcamp;



