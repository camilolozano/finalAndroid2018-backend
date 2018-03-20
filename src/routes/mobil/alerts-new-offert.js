import express from 'express';
import models from '../../models/index';
import { queries } from '../../models';
import cookie from '../middlewares/coockie-session.js';

const db = models.sequelize;
const router = express.Router();

function getSql (code) {
  return queries
    .find({
      where: {
        queryCode: code
      }
    })
    .then(data => {
      return data.query;
    });
}

function exeSql (sql) {
  return db
    .query(sql, {
      type: db.QueryTypes.SELECT
    })
    .then(t => {
      return t;
    })
    .catch(err => {
      return err;
    });
}

router('/id_user', ...cookie, () => {
  const code = 'SEL001';

});

module.exports = router;
