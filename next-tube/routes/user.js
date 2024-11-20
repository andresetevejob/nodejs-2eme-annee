import express from 'express';
import { USERS } from '../data/users.js';
const router = express.Router();
router.get('/users', function(req, res, next) {
    res.send(USERS)
});
export default router;