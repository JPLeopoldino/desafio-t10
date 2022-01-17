import { Router } from "express";
// const { addUser } = require('../controllers/userController');
import { 
    addUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
} from '../controllers/userController';

const router = Router();

// routes.post("/users", async (req, res) =>
// //   createUserFactory().handle(request, response)
//     res.status(200).json('running')
// );

router.post('/user', addUser);
router.get('/users', getAllUsers);
router.get('/user/:id', getUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

module.exports = { routes: router };