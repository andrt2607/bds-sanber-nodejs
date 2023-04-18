const fs = require('fs')
const fsPromise = require('fs/promises')

const path = "data.json"

const registerUser = ((req, res) => {
    fs.readFile(path, (err, data) => {
        if(err){
            res.status(400).json(
                {errors: 'Error membaca data'},
            )
        }else{
            let existingData = JSON.parse(data);
            let {users} = existingData;
            let {name, role, password} = req.body;
            let newUser = {}
            if(role == 'trainer'){
                newUser = {name, role, password, isLogin: false, students: []};
            }else{
                newUser = {name, role, password, isLogin: false};
            }
            users.push(newUser);
            let newData = {...existingData, users} 

            fs.writeFile(path, JSON.stringify(newData), (err) => {
                if (err){
                    res.status(400).json({errors : 'error menyimpan data'})

                }else{
                    res.status(201).json(
                        {message: 'Berhasil Register'}
                    )
                }
              });
        }
    })
})

const findAll = ((req, res) => {
    fs.readFile(path, (err, data) => {
        if (err){
            res.status(400).json(
                {errors: 'Error membaca data'},
            )
        }else{
            let realData = JSON.parse(data);
            res.status(200).json({
                message: 'Berhasil get karyawan',
                data: realData.users
            })
        }
      }); 
})

const login = ((req, res) => {
    fsPromise.readFile(path)
    .then((data) => {
        let employees = JSON.parse(data);
        let {users} = employees

        let {name, password} = req.body
        let  indexEmp = users.findIndex((user) => user.name == name)
        if(indexEmp == -1){
            res.status(404).json({error: 'Data name tidak ditemukan'})
        }else{
            let dataEmployee = users[indexEmp]
            if(dataEmployee.password == password){
                dataEmployee.isLogin = true
                //dari index emp, jumlah data yg dimasukkan, target data yg akan dimasukkan
                users.splice(indexEmp, 1, dataEmployee)
                console.log('Employees : ', employees)
                return fsPromise.writeFile(path, JSON.stringify(employees))
            }else{
                res.status(400).json({error: 'Password salah'})
            }
        }
    })
    .then(() => {
        res.status(200).json({message: 'Berhasil Login'})
    })
    .catch((err) => {
        console.log('Error readFile Login : ', err)
    })
});

const addSiswa = (async (req, res) => {
    let resultGetDataJson = await fsPromise.readFile(path);
    let data = JSON.parse(resultGetDataJson)
    let {users} = data;
    console.log('Users : ', users)
    let adminIndex = users.findIndex((user) => user.role == 'admin')
    if(adminIndex != -1 && users[adminIndex].isLogin == false){
        res.status(401).json({message: 'Admin Harus Login'})
    }else{   
        let indexTrainer = users.findIndex((trainer) => trainer.name == req.params.name)
        if(indexTrainer == -1){
            res.status(400).json({message: 'Nama trainer tidak ditemukan'})
        }else{
            res.status(200).json({message: `Berhasil tambah siswa trainer ${req.params.name}`})
            let trainer = users[indexTrainer]
            trainer.students.push({
                name: req.body.name,
                class: req.body.class
            })
            await fsPromise.writeFile(path, JSON.stringify(data))
        }
    }
    
})

module.exports = {registerUser, findAll, login, addSiswa}