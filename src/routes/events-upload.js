import express from 'express';
import { upload } from '../controllers/upload-pictures';
import jwtMiddleware from '../middlewares/jwt';

const router = express.Router();

router.post('/', ...jwtMiddleware, upload.array('file'), (req, res) => {
  res.json({ success: true });
});

module.exports = router;
