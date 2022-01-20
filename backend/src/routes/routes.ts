const expresss = require('express');
const userController = require('../controllers/userController');

const router = expresss.Router();

router.post('/user', userController.addUser);
router.get('/users', userController.getAllUsers);
router.get('/user/:id', userController.getUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = { routes: router };
