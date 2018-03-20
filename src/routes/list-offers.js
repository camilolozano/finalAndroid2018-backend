import express from 'express';
import cookie from '../middlewares/coockie-session.js';
import { queries } from '../models';

const db = require('../models/index').sequelize;
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

function exeSql (sql, idEmp) {
  return db
    .query(sql, {
      replacements: {
        id_emp: idEmp
      },
      type: db.QueryTypes.SELECT
    })
    .then(t => {
      return t;
    })
    .catch(err => {
      return err;
    });
}

router.get('/:id_user&:id_emp', ...cookie, (req, res) => {
  const sql = 'SEL005';
  getSql(sql).then((query) => {
    exeSql(query, req.params.id_emp).then((data) => {
      if (data.length > 0) {
        res.json({
          success: true,
          data
        });
      } else {
        res.json({
          success: false,
        });
      }
    });
  });
});

module.exports = router;
