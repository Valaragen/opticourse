// routes/articleRoutes.ts
import express, { Router } from 'express';
import { createArticle, deleteArticle, getArticles, updateArticle } from '../controllers/articleController';

const router: Router = express.Router();

router.get('/', getArticles);
router.post('/', createArticle);
router.put('/:id', updateArticle);
router.delete('/:id', deleteArticle);

export default router;
