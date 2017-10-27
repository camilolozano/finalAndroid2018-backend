import express from 'express';
import cookie from '../middlewares/coockie-session.js';
import models from '../models';
import bcrypt from 'bcryptjs';
import emails from '../controllers/email_new_user';
import jwt from 'jwt-simple';

import cfg from '../config/config-jwt';
//const auth = require('../auth')();
const router = express.Router();

router.get('/:id_user', ...cookie, (req, res) => {
  res.sendStatus(200);
});

function existIdClient (_identificacion) {
  return models.crm_usuarios_sistemas.findOne({
    where: {
      identificacion: _identificacion
    }
  }).then(t => {
    const val = (t) ? true : false;
    return val;
  })
}

function existEmailClient (_correo) {
  if (_correo) {
    return false;
  } else {
    return models.crm_usuarios_sistemas.findOne({
      where: {
        emailusername: _correo
      }
    }).then(t => {
      const val = (t) ? true : false;
      return val;
    })
  }
}

// Actualizar la información de un usuario
router.put('/upd_user_info/:id_user', async (req, res) => {

  const isIdentification = await existIdClient(req.body.identificacion);
  const isEmail = await existEmailClient(req.body.correo);

  if (isIdentification) {
    res.json({
      success: false,
      msg: 'Número de identificación ya registrado, verifique la información'
    });
  } else if (isEmail) {
    res.json({
      success: false,
      msg: 'Correo electrónico ya registrado, verifique la información'
    });
  } else {
    models.crm_usuarios_sistemas.find({
      where: {
        id_usuario_sistema: req.body.id_user_sis
      }
    }).then((data) => {
      return data.update({
        codigo_usuario: req.body.codigo_usuario,
        nombre1: req.body.nombre1,
        nombre2: req.body.nombre2,
        apellido1: req.body.apellido1,
        apellido2: req.body.apellido2,
        identificacion: req.body.identificacion,
        id_tipo_usuario: req.body.tipousu,
        id_oficina: req.body.oficina,
        numero_contacto: req.body.numcontact,
        numero_contacto_referencia: req.body.numref,
        id_tipo_identificacion: req.body.tipodoc
      });
    }).then(() => {
      res.json({
        msg: 'Información actualizada',
        success: true
      });
    }).catch((err) => {
      res.json({
        msg: 'error ' + err,
        success: false
      });
    });
  }
});

// Crear usuario ========================================
const jwtPayload = (data) => {
  const { req, res, usuario } = data;
  const payload = {
    id: usuario.id_usuario_sistema
  };
  const token = jwt.encode(payload, cfg.jwtSecret);
  const sendData = {
    req, res, usuario, token
  };
  emails.email(sendData);
};

router.post('/create/:id_user', ...cookie, async (req, res) => {
  const isIdentification = await existIdClient(req.body.identificacion);
  const isEmail = await existEmailClient(req.body.correo);
  if (isIdentification) {
    res.json({
      success: false,
      msg: 'Número de identificación ya registrado, verifique la información'
    });
  } else if (isEmail) {
    res.json({
      success: false,
      msg: 'Correo electrónico ya registrado, verifique la información'
    });
  } else {
    models.crm_usuarios_sistemas.find({
      where: {
        codigo_usuario: req.body.codigo_usuario
      }
    }).then((data) => {
      if (data) {
        res.json({
          msg: 'El codigo ya fue asignado a otro usuario',
          success: false
        });
      } else {
        models.crm_usuarios_sistemas.create({
          codigo_usuario: req.body.codigo_usuario,
          nombre1: req.body.nombre1,
          nombre2: req.body.nombre2,
          apellido1: req.body.apellido1,
          apellido2: req.body.apellido2,
          emailusername: req.body.emailusername,
          // Se da un caracter provicional para el psw 
          password: bcrypt.hashSync('"#$%&/"', 8),
          id_tipo_usuario: req.body.id_tipo_usuario,
          id_oficina: req.body.id_oficina,
          numero_contacto: req.body.numero_contacto,
          numero_contacto_referencia: req.body.contacto_referencia,
          id_empresa: req.body.id_empresa,
          identificacion: req.body.identificacion,
          id_tipo_identificacion: req.body.id_tipo_identificacion
        }).then((usuarioCreado) => {
          const usuario = usuarioCreado;
          const data = {
            req,
            res,
            usuario
          }
          jwtPayload(data);
        }).catch((err) => {
          res.json({
            success: false,
            msg: 'No se creo usuario'
          });
        });
      }
    });
  }
});

router.get('/oficinas/:id_user', ...cookie, (req, res) => {
  models.crm_oficinas.findAll({
    attributes: ['id_oficina', 'descripcion'],
  }).then((oficinas) => {
    res.json({
      data: oficinas,
      success: true
    });
  }).catch(err => {
    res.json({
      success: false,
      msg: 'Error al cargar oficinas'
    })
  })
});

router.get('/buscar_usu/:id_user', ...cookie, (req, res) => {
  models.crm_usuarios_sistemas.findAll({
    attributes: ['id_usuario_sistema', 'codigo_usuario', 'nombre1', 'apellido1']
  }).then((usuarios) => {
    res.json({
      data: usuarios,
      success: true
    });
  }).catch(() => {
    res.json({
      msg: 'error',
      success: false
    });
  });
});

// TIpo usaurios
router.get('/tipo_user/:id_user', ...cookie, (req, res) => {
  models.crm_tipo_usuarios.findAll().then((tipoUsuarios) => {
    res.json({
      data: tipoUsuarios,
      success: true
    });
  }).catch(() => {
    res.json({
      msg: 'error',
      success: false
    });
  });
});

// Contador de todos los usuarios registrados
router.get('/list_user_count/:id_user', ...cookie, (req, res) => {
  models.crm_usuarios_sistemas.findAll({
    attributes: ['id_usuario_sistema'],
    where: {
      id_usuario_sistema: {
        $ne: 1
      },
    },
    include: [{
      attributes: ['descripcion'],
      model: models.crm_tipo_usuarios
    }, {
      attributes: ['descripcion'],
      model: models.crm_tipo_identificaciones
    }]
  }).then((data) => {
    res.json({
      data: data.length,
      success: true
    });
  }).catch((err) => {
    res.json({
      msg: 'error ' + err,
      success: false
    });
  });
});

// listar a todos los usuarios
router.get('/list_user/:id_user&:offset&:limit', ...cookie, (req, res) => {
  models.crm_usuarios_sistemas.findAll({
    attributes: [
      'id_usuario_sistema',
      'codigo_usuario',
      'nombre1',
      'nombre2',
      'apellido1',
      'apellido2',
      'emailusername',
      'id_tipo_usuario',
      'id_oficina',
      'numero_contacto',
      'numero_contacto_referencia',
      'id_empresa',
      'identificacion',
      'id_tipo_identificacion',
      'estado',
    ],
    where: {
      id_usuario_sistema: {
        $ne: 1
      },
    },
    include: [{
      attributes: ['descripcion'],
      model: models.crm_tipo_usuarios
    }, {
      attributes: ['descripcion'],
      model: models.crm_tipo_identificaciones
    }, {
      attributes: ['descripcion'],
      model: models.crm_oficinas
    }],
    order: ['id_usuario_sistema'],
    limit: req.params.limit,
    offset: req.params.offset,
  }).then((data) => {
    res.json({
      data,
      success: true
    });
  }).catch((err) => {
    res.json({
      msg: 'error ' + err,
      success: false
    });
  });
});

// Tipo de identificaciones
router.get('/tipo_identificacion/:id_user', ...cookie, (req, res) => {
  models.crm_tipo_identificaciones.findAll({
  }).then((tipoIdent) => {
    res.json({
      data: tipoIdent,
      success: true
    });
  }).catch(() => {
    res.json({
      msg: 'error',
      success: false
    });
  });
});

// Ver toda la información de un usuario
router.get('/user_info/:id_user&:id_user_sis', ...cookie, (req, res) => {
  models.crm_usuarios_sistemas.find({
    where: {
      id_usuario_sistema: req.params.id_user_sis
    },
    include: [{
      attributes: ['descripcion'],
      model: models.crm_tipo_usuarios
    }, {
      attributes: ['descripcion'],
      model: models.crm_tipo_identificaciones
    }]
  }).then((data) => {
    res.json({
      data,
      success: true
    });
  }).catch((err) => {
    res.json({
      msg: 'error ' + err,
      success: false
    });
  });
});

// actualizar el estado de un usaurio
router.put('/upd_user/:id_user', ...cookie, (req, res) => {
  const state = !req.body.estado;
  models.crm_usuarios_sistemas.find({
    where: {
      id_usuario_sistema: req.body.id_usuario
    }
  }).then((u) => {
    // console.log('-----', u);
    return u.updateAttributes({
      estado: state
    });
  }).then((e) => {
    res.json({
      msg: 'Actualización exitosa',
      success: true,
      estado: e.estado
    });
  }).catch((err) => {
    res.json({
      msg: 'Error al actualizar',
      success: true
    });
  })
});

module.exports = router;
