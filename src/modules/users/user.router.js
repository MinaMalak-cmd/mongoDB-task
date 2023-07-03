import {Router} from 'express';
import * as userController from './controllers/user.js';

const router = Router();

router.get('/', userController.getAllUsers);
router.post('/', userController.addUser);
router.post('/login', userController.login);

export default router;

