import express from 'express';
import cookie from '../middlewares/coockie-session.js';
import {
  locationTypes,
  acPowerAvailableTypes,
  fenceTypes,
  accessTypes,
  buildingTypes,
  structureInformationTypes,
  legTypes,
  generalConditionTypes,
  antenaTypes,
  publicPrivateWifiTypes,
  cellularServiceProviderTypes,
  technologyTypes
} from '../models';

const router = express.Router();

router.get('/location-type/:id_user', ...cookie, (req, res) => {
  locationTypes
    .findAll({
      attributes: [['idLocationType', 'value'], ['description', 'viewValue']]
    })
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

router.get('/ac-power-available/:id_user', ...cookie, (req, res) => {
  acPowerAvailableTypes
    .findAll({
      attributes: [['idAcPowerAvailable', 'value'], ['description', 'viewValue']]
    })
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

router.get('/fence-type/:id_user', ...cookie, (req, res) => {
  fenceTypes
    .findAll({
      attributes: [['idfenceType', 'value'], ['description', 'viewValue']]
    })
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

router.get('/access/:id_user', ...cookie, (req, res) => {
  accessTypes
    .findAll({
      attributes: [['idAccessType', 'value'], ['description', 'viewValue']]
    })
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

router.get('/building-type/:id_user', ...cookie, (req, res) => {
  buildingTypes
    .findAll({
      attributes: [['idBuildingType', 'value'], ['description', 'viewValue']]
    })
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

router.get('/type/:id_user', ...cookie, (req, res) => {
  structureInformationTypes
    .findAll({
      attributes: [['idStructureInformationType', 'value'], ['description', 'viewValue']]
    })
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

router.get('/general-condition-type/:id_user', ...cookie, (req, res) => {
  generalConditionTypes
    .findAll({
      attributes: [['idGeneralConditionType', 'value'], ['description', 'viewValue']]
    })
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

router.get('/leg-type/:id_user', ...cookie, (req, res) => {
  legTypes
    .findAll({
      attributes: [['idLegType', 'value'], ['description', 'viewValue']]
    })
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

router.get('/anttena-type/:id_user', ...cookie, (req, res) => {
  antenaTypes
    .findAll({
      attributes: [['idAntenaType', 'value'], ['description', 'viewValue']]
    })
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

router.get('/public-private-wifi/:id_user', ...cookie, (req, res) => {
  publicPrivateWifiTypes
    .findAll({
      attributes: [['idPublicPrivateWifi', 'value'], ['description', 'viewValue']]
    })
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

router.get('/antena-type/:id_user', ...cookie, (req, res) => {
  antenaTypes
    .findAll({
      attributes: [['idAntenaType', 'value'], ['description', 'viewValue']]
    })
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

router.get('/cellular-service-type/:id_user', ...cookie, (req, res) => {
  cellularServiceProviderTypes
    .findAll({
      attributes: [['idCellularServiceProvider', 'value'], ['description', 'viewValue']]
    })
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

router.get('/technology-type/:id_user', ...cookie, (req, res) => {
  technologyTypes
    .findAll({
      attributes: [['idTechnologyType', 'value'], ['description', 'viewValue']]
    })
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
