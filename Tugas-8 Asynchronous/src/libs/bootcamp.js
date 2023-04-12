import Employee from "./employee";
import fs from "fs";
import "core-js/stable";
import fsPromises from "fs/promises";

const path = "data.json";

class Bootcamp {
  static register(input) {
    let [strname, strpassword, strrole] = input.split(",");

    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err);
      }

      let existingData = JSON.parse(data);
      let employee = new Employee(strname, strpassword, strrole);
      existingData.push(employee);

      fs.writeFile(path, JSON.stringify(existingData), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Berhasil Register");
        }
      });
    });
  }
  static login(input) {
    let [inputName, inputPassword] = input.split(",");

    fsPromises
      .readFile(path)
      .then((data) => {
        let employees = JSON.parse(data);

        let indexEmp = employees.findIndex((emp) => emp._name == inputName);
        if (indexEmp == -1) {
          console.log("Name tidak ditentukan");
        } else {
          let dataEmployee = employees[indexEmp];
          if (dataEmployee._password == inputPassword) {
            dataEmployee._isLogin = true;
            employees.splice(indexEmp, 1, dataEmployee);
            return fsPromises.writeFile(path, JSON.stringify(employees));
          } else {
            console.log("Password yang diinput salah");
          }
        }
      })
      .then(() => {
        console.log("Berhasil Login");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static addSiswa(input) {
    let [siswaName, trainerName] = input.split(",");
    fsPromises
      .readFile(path)
      .then((data) => {
        let employees = JSON.parse(data);
        let indexAdminEmp = employees.findIndex(
          (emp) => emp._role == "admin" && emp._isLogin == true
        );
        let isTrainerExist = employees.findIndex(
          (emp) => emp._name == trainerName
        );
        if (indexAdminEmp == -1) {
          console.log("Admin harus login");
        } else if (isTrainerExist != -1) {
          console.log("Trainer sudah ada");
        }
        let trainer = new Employee(trainerName, "123456", "trainer");
        trainer.addStudents({ name: siswaName });
        employees.push(trainer);
        return fsPromises.writeFile(path, JSON.stringify(employees));
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export const addSiswaAsyncAwait = async (input) => {
  try {
    let [siswaName, trainerName] = input.split(",");
    let dataRead = await fsPromises.readFile(path);
    let employees = JSON.parse(dataRead);
    let indexAdminEmp = employees.findIndex(
      (emp) => emp._role == "admin" && emp._isLogin == true
    );
    let isTrainerExist = employees.findIndex((emp) => emp._name == trainerName);
    if (indexAdminEmp == -1) {
      console.log("Admin harus login");
    } else if (isTrainerExist != -1) {
      console.log("Trainer sudah ada");
    } else {
      let trainer = new Employee(trainerName, "123456", "trainer");
      trainer.addStudents({ name: siswaName });
      employees.push(trainer);
      await fsPromises.writeFile(path, JSON.stringify(employees));
      console.log("Berhasil tambah siswa");
    }
  } catch (error) {
    console.log("Add Siswa Error : ", error);
  }
};

export default Bootcamp;
