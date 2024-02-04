// routes/articleRoutes.ts
import express, { Router, Request, Response } from 'express';
import Article from '../models/Article';

const articles: Router = express.Router();

// Route GET pour récupérer tous les articles
articles.get('/articles', async (req: Request, res: Response) => {
  try {
    const articles = await Article.findAll();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des articles.' });
  }
});

// Route POST pour créer un nouvel article
articles.post('/articles', async (req: Request, res: Response) => {
  const { name, description } : {name: string, description: string} = req.body;
  try {
    const newArticle = await Article.create({ req.body });
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(400).json({ error: 'Erreur lors de la création de l\'article.' });
  }
});

// Route PUT pour mettre à jour un article existant
articles.put('/articles/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const article = await Article.findByPk(id);
    if (article) {
      await article.update({ name, description });
      res.json(article);
    } else {
      res.status(404).json({ error: 'Article non trouvé.' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Erreur lors de la mise à jour de l\'article.' });
  }
});

// Route DELETE pour supprimer un article existant
articles.delete('/articles/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const article = await Article.findByPk(id);
    if (article) {
      await article.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Article non trouvé.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de l\'article.' });
  }
});

export default articles;
