import express from 'express';
import cookie from '../middlewares/coockie-session.js';
import { queries } from '../models';
import models from '../models/index';

const db = models.sequelize;
const router = express.Router();

function getSql (query) {
  return queries.findOne({
    where: {
      queryCode: query
    }
  }).then(t => {
    return t;
  }).catch(err => {
    return err;
  });
}

function exeSqlMy (sql, idUser) {
  return db.query(sql, {
    replacements: {
      id_user: idUser
    },
    type: db.QueryTypes.SELECT
  }).then(t => {
    return t;
  }).catch(err => {
    return err;
  });
}

function exeSqlAll (sql, idUser) {
  return db.query(sql, {
    type: db.QueryTypes.SELECT
  }).then(t => {
    return t;
  }).catch(err => {
    return err;
  });
}

// Get my events
router.get('/my-events/:id_user', ...cookie, async(req, res) => {
  const query = 'SEL001';
  const extQuery = await getSql(query);
  await exeSqlMy(extQuery, req.params.id_user).then((data) => {
    res.json({
      data
    });
  }).catch(err => {
    console.log(err);
  });
});

// Get all events
router.get('/all-events/:id_user', ...cookie, async(req, res) => {
  const query = 'SEL002';
  const extQuery = await getSql(query);
  await exeSqlAll(extQuery, req.params.id_user).then((data) => {
    res.json({
      data
    });
  }).catch(err => {
    console.log(err);
  });
});

module.exports = router;
