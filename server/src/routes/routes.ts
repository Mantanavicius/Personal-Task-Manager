import { Router } from 'express';
import * as controller from '../controllers/controller'

const router = Router();


router.get('/', controller.tasks_get);
router.get('/:id', controller.task_get);
router.post('/', controller.tasks_post);
router.patch('/:id', controller.tasks_patch);
router.delete('/:id', controller.tasks_delete);


export default router