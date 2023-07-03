import {Router} from 'express';
import * as noteController from './controllers/note.js';

const router = Router();

router.get('/', noteController.getAllNotes);
router.get('/:id', noteController.getAllNotes);
router.post('/', noteController.addNote);
router.put('/:id', noteController.updateNote);
// router.post('/signup', userController.signup);
// router.put('/:id', userController.updateUser);
// router.delete('/:id', userController.deleteUser);

export default router;

