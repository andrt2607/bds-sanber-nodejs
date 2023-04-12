class Employee{
    constructor(name, password, role){
        this._name = name;
        this._password = password;
        this._role = role;
        this._isLogin = false;
        this._students = [];
    }

    get name(){
        return this._name;
    }
    set setName(newName){
        this._name = newName;
    }
    get password(){
        return this._password;
    }
    set setPassword(newPassword){
        this._password = newPassword;
    }
    get role(){
        return this._role;
    }
    set setRole(newRole){
        this._role = newRole;
    }
    get isLogin(){
        return this._isLogin;
    }
    set setIsLogin(newIsLogin){
        this._isLogin = newIsLogin;
    }
    get students(){
        return this._students;
    }
    addStudents(student){
        this._students.push(student);
    }


}

export default Employee;