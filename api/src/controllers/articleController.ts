// routes/articleRoutes.ts
import { Request, Response } from 'express';
import Article from '../models/Article';
import articleSchema from '../validators/articleSchema';
import { ValidationError } from 'joi';

export const getArticles = async (_req: Request, res: Response): Promise<void> => {
  try {
    const articles = await Article.findAll();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch articles.' });
  }
};

export const createArticle = async (req: Request, res: Response): Promise<void> => {
  try {
    const value = await articleSchema.validateAsync(req.body);
    const newArticle = await Article.create(value);
    res.status(201).json(newArticle);
  } catch (err) {
    if (err instanceof ValidationError)
      res.status(400).json({ error: err.message });
    else
      res.status(500).json({ error: 'Failed to create article.' });
  }
};

export const updateArticle = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const article = await Article.findByPk(id);
    if (article) {
      const value = await articleSchema.validateAsync(req.body);
      await article.update(value);
      res.json(article);
    } else {
      res.status(404).json({ error: 'Article not found.' });
    }
  } catch (err) {
    if (err instanceof ValidationError)
      res.status(400).json({ error: err.message });
    else
      res.status(400).json({ error: 'Failed to update article.' });
  }
};

export const deleteArticle = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const article = await Article.findByPk(id);
    if (article) {
      await article.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Article not found.' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete article.' });
  }
};
