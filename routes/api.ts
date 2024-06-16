import { Router } from "express";

import * as PostController from '../controllers/PostController';
import * as UserController from '../controllers/UserController';

const router = Router();

router.get('/posts', PostController.all);
router.get('/post/:id', PostController.one);
router.get('/users', UserController.all);
router.get('/user/:id', UserController.one);

router.post('/post', PostController.create);
// router.post('/user', UserController.create);

 router.put('/post/:id', PostController.togglePost);
router.delete('/post/:id', PostController.deletePost);

export default router;