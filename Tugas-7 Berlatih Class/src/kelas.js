class Kelas{
    constructor(name, level, instructor){
        this._name = name;
        this._students = [];
        this._level = level;
        this._instructor = instructor;
    }

    get name() {
        return this._name;
    }
    set setName(name) {
        this._name = name;
    }
    get level(){
        return this._level;
    }
    set setLevel(level) {
        this._level = level;
    }
    get students(){
        return this._students;
    }
    setStudent(student) {
        this._students.push(student);
    }
    get instructor(){
        return this._instructor;
    }
    set setInstructor(instructor) {
        this._instructor = instructor;
    }
}

export default Kelas;