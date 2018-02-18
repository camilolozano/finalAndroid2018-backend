import express from 'express';
import models from '../../models/index';
import { queries } from '../../models';

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

router.get('/:id_user&:key', async (req, res) => {
  const code = 'SEL001';
  const sql = await getSql(code);
  const sqlF = sql.replace(`:findWord`, req.params.key);
  exeSql(sqlF).then((data) => {
    if (data.length === 0) {
      res.json({
        success: true,
        flag: 'NON'
      });
    } else {
      res.json({
        success: true,
        flag: 'YES',
        data
      });
    }
  }).catch(() => {
    res.json({
      success: false,
      msg: 'Error en la consulta'
    });
  });
});

module.exports = router;
