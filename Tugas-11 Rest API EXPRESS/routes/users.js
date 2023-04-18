var express = require('express');
const { registerUser, findAll, login, addSiswa } = require('../controllers/user_controller');
var router = express.Router();

/* GET users listing. */
router.post('/register', registerUser)
router.post('/login', login)
router.post('/karyawan/:name/siswa', addSiswa)
router.get('/karyawan', findAll)

module.exports = router;
