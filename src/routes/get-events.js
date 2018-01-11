import express from 'express';
import cookie from '../middlewares/coockie-session.js';
import { queries } from '../models';
import models from '../models/index';

const db = models.sequelize;
const router = express.Router();

function getSql (query) {
  return queries
    .findOne({
      where: {
        queryCode: query
      }
    })
    .then(t => {
      return t;
    })
    .catch(err => {
      return err;
    });
}

function exeSqlMy (sql, idUser) {
  return db
    .query(sql, {
      replacements: {
        id_user: idUser
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

function exeSqlAll (sql, idUser) {
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

function exeSqlDataForm (sql, idEvent) {
  return db
    .query(sql, {
      replacements: {
        id_event: idEvent
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

function exeSqlDataGridForm (sql, idStructureInformation) {
  return db
    .query(sql, {
      replacements: {
        id_structure_information: idStructureInformation
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

function exeSqlDataGridFormservice (sql, idService) {
  return db
    .query(sql, {
      replacements: {
        id_service: idService
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

// Get my events
router.get('/my-events/:id_user', ...cookie, async (req, res) => {
  const query = 'SEL001';
  const extQuery = await getSql(query);
  await exeSqlMy(extQuery, req.params.id_user)
    .then(data => {
      res.json({
        data
      });
    })
    .catch(err => {
      console.log(err);
    });
});

// Get all events
router.get('/all-events/:id_user', ...cookie, async (req, res) => {
  const query = 'SEL002';
  const extQuery = await getSql(query);
  await exeSqlAll(extQuery, req.params.id_user)
    .then(data => {
      res.json({
        data
      });
    })
    .catch(err => {
      console.log(err);
    });
});

// get Asite location information
router.get('/asite-location/:id_user&:id_event', ...cookie, async (req, res) => {
  const query = 'SEL003';
  const extQuery = await getSql(query);
  await exeSqlDataForm(extQuery, req.params.id_event)
    .then(data => {
      res.json({
        success: true,
        data
      });
    })
    .catch(err => {
      console.log(err);
    });
});

// get Osurvey Information
router.get('/osurvey-information/:id_user&:id_event', ...cookie, async (req, res) => {
  const query = 'SEL004';
  const extQuery = await getSql(query);
  await exeSqlDataForm(extQuery, req.params.id_event)
    .then(data => {
      res.json({
        success: true,
        data
      });
    })
    .catch(err => {
      console.log(err);
    });
});

// get Services Availables
router.get('/services-availables/:id_user&:id_event', ...cookie, async (req, res) => {
  const query = 'SEL005';
  const extQuery = await getSql(query);
  await exeSqlDataForm(extQuery, req.params.id_event)
    .then(data => {
      res.json({
        success: true,
        data
      });
    })
    .catch(err => {
      console.log(err);
    });
});

// get Structure information
router.get('/structure-information/:id_user&:id_event', ...cookie, async (req, res) => {
  const query = 'SEL006';
  const extQuery = await getSql(query);
  await exeSqlDataForm(extQuery, req.params.id_event)
    .then(data => {
      res.json({
        success: true,
        data
      });
    })
    .catch(err => {
      console.log(err);
    });
});

// get compound
router.get('/compound/:id_user&:id_event', ...cookie, async (req, res) => {
  const query = 'SEL007';
  const extQuery = await getSql(query);
  await exeSqlDataForm(extQuery, req.params.id_event)
    .then(data => {
      res.json({
        success: true,
        data
      });
    })
    .catch(err => {
      console.log(err);
    });
});

// get Picture Log
router.get('/picture-log/:id_user&:id_event', ...cookie, async (req, res) => {
  const query = 'SEL008';
  const extQuery = await getSql(query);
  await exeSqlDataForm(extQuery, req.params.id_event)
    .then(data => {
      res.json({
        success: true,
        data
      });
    })
    .catch(err => {
      console.log(err);
    });
});

// get structure information grid
router.get('/structure-grid/:id_user&:id_event', async (req, res) => {
  const query = 'SEL009';
  const extQuery = await getSql(query);
  await exeSqlDataGridForm(extQuery, req.params.id_event)
    .then(data => {
      res.json({
        success: true,
        data
      });
    })
    .catch(err => {
      console.log(err);
    });
});

// Get service available grids
router.get('/service-available-grid/:id_user&:id_event', async (req, res) => {
  const query = 'SEL010';
  const extQuery = await getSql(query);
  await exeSqlDataGridFormservice(extQuery, req.params.id_event)
    .then(data => {
      res.json({
        success: true,
        data
      });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
