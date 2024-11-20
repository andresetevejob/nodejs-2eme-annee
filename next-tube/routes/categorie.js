import express from 'express';
import { CATEGORIES } from '../data/categories.js';
const router = express.Router();
router.get('/categories', function(req, res, next) {
    res.send(CATEGORIES)
});
export default router;