import express from 'express';
import models from '../../models/index';
import { queries } from '../../models';

const router = express.Router();
const db = models.sequelize;

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

// Notificacion de solicirud de empresas
function exeSql (sql, idUser) {
  return db
    .query(sql, {
      replacements: {
        idUser: idUser
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

router.get('/list-offers-company/:id_user', async (req, res) => {
  const code = 'SEL008';
  const sql = await getSql(code);
  exeSql(sql, req.params.id_user).then((data) => {
    res.json({
      success: true,
      data: data
    });
  }).catch(() => {
    res.json({
      success: false,
      msg: 'Error en la consulta'
    });
  });
});

// Cuenta cuantas solicitudes le han realizado a una empresa web
function exeSqlC (sql, idCompany) {
  return db
    .query(sql, {
      replacements: {
        idComp: idCompany
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

router.get('/offers-company-count/:id_user&:id_company', async (req, res) => {
  const code = 'SEL0011';
  const sql = await getSql(code);
  exeSqlC(sql, req.params.id_company).then((data) => {
    res.json({
      success: true,
      data: data[0].count
    });
  }).catch((err) => {
    res.json({
      success: false,
      msg: 'Error en la consulta'
    });
  });
});

// Cuenta cuantas solicitudes ha realizado a usuario App
function exeSqlCW (sql, idUser) {
  return db
    .query(sql, {
      replacements: {
        idUser: idUser
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

router.get('/offers-company-count-app/:id_user', async (req, res) => {
  const code = 'SEL011';
  const sql = await getSql(code);
  exeSqlCW(sql, req.params.id_user).then((data) => {
    // const info = (data[0].count === undefined || data[0].count === null) ? 0 : data[0].count;
    // console.log('--->', info);
    // res.json({
    //   success: true,
    //   data: info
    // });
  }).catch((err) => {
    res.json({
      success: false,
      msg: 'Error en la consulta'
    });
  });
});

module.exports = router;

/**
 * import express from 'express';
import models from '../../models/index';
import { queries } from '../../models';

const router = express.Router();
const db = models.sequelize;

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

// Notificacion de solicirud de empresas

function exeSqlFulOffers (sql, idUser) {
  return db
    .query(sql, {
      replacements: {
        idUser: idUser
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

function exeSql (sql, idUser) {
  return db
    .query(sql, {
      replacements: {
        idUser: idUser
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

async function getDataOffers (sql, req, res) {
  exeSql(sql, req.params.id_user)
    .then(data => {
      res.json({
        success: true,
        data: data
      });
    })
    .catch(() => {
      res.json({
        success: false,
        msg: 'Error en la consulta'
      });
    });
}

function selectQueryOffers (req, res, data, sql){
  switch (data[0].typeShop) {
    case 'Estadar':
      const sqla = sql.replace(':order', 'order by doc."idDocument" ASC')
      getDataOffers(sqla, req, res);
      break;
    case 'Economico':
      const sqlb = sql.replace(':order', 'order by doc."idDocument", bud."answerText" ASC')
      getDataOffers(sqlb, req, res);
      break;
    default:
      break;
  }
}

router.get('/list-offers-company/:id_user', async (req, res) => {
  const code = 'SEL008';
  const sql = await getSql(code);
  const query = sql.replace(':order', '');

  exeSql(query, req.params.id_user)
    .then(data => {
      selectQueryOffers(req, res, data, sql);
    })
    .catch(() => {
      res.json({
        success: false,
        msg: 'Error en la consulta'
      });
    });
});

// Cuenta cuantas solicitudes le han realizado a una empresa web
function exeSqlC (sql, idCompany) {
  return db
    .query(sql, {
      replacements: {
        idComp: idCompany
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

router.get('/offers-company-count/:id_user&:id_company', async (req, res) => {
  const code = 'SEL003';
  const sql = await getSql(code);
  exeSqlC(sql, req.params.id_company)
    .then(data => {
      res.json({
        success: true,
        data: data[0].count
      });
    })
    .catch(err => {
      res.json({
        success: false,
        msg: 'Error en la consulta'
      });
    });
});

// Cuenta cuantas solicitudes ha realizado a usuario App
function exeSqlCW (sql, idUser) {
  return db
    .query(sql, {
      replacements: {
        idUser: idUser
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

router.get('/offers-company-count-app/:id_user', async (req, res) => {
  const code = 'SEL004';
  const sql = await getSql(code);
  exeSqlCW(sql, req.params.id_user)
    .then(data => {
      // const info = (data[0].count === undefined || data[0].count === null) ? 0 : data[0].count;
      // console.log('--->', info);
      // res.json({
      //   success: true,
      //   data: info
      // });
    })
    .catch(err => {
      res.json({
        success: false,
        msg: 'Error en la consulta'
      });
    });
});

module.exports = router;

 */