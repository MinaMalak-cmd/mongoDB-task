import {Router} from 'express';
import * as noteController from './controllers/note.js';

const router = Router();

// for development purposes only
router.get('/', noteController.getAllNotes);

router.get('/:noteId/:owner', noteController.getANote);
router.post('/', noteController.addNote);
router.put('/:noteId', noteController.updateNote);
router.delete('/:noteId/:owner', noteController.deleteNote);

export default router;

