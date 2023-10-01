// backend/routes/ImagesRouter.js

import express from 'express';
import {
  getPosts,
  getPostsByTag,
  getPostsBySort,
  getPostsById,
} from '../controllers/PostsController.js';

const router = express.Router();

// GET method route to fetch images on the basis of tag, id, sort
router.get('/posts', getPosts);
router.get('/posts/tag', getPostsByTag);
router.get('/posts/sort', getPostsBySort);
router.get('/posts/find', getPostsById);

export default router;
