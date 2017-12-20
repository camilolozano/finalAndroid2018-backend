import express from 'express';
import { upload } from '../controllers/upload-pictures';
import jwt from '../middlewares/jwt';

const router = express.Router();

router.post('/', ...jwt, upload.array('file'), (req, res) => {
  res.json({ success: true });
});

module.exports = router;
