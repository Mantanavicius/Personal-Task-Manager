import { Router } from 'express';
import * as controller from '../controllers/controller'

const router = Router();


router.get('/tasks', controller.tasks_get);
router.post('/tasks', controller.tasks_post);

export default router