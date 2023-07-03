import {Router} from 'express';
import * as noteController from './controllers/note.js';

const router = Router();

router.get('/:id', noteController.getAllNotes);
router.post('/', noteController.addNote);
// router.post('/signup', userController.signup);
// router.put('/:id', userController.updateUser);
// router.delete('/:id', userController.deleteUser);

export default router;

