import express from 'express';
import cookie from '../middlewares/coockie-session.js';
import { queries } from '../models';
import models from '../models/index';

const db = models.sequelize;
const router = express.Router();
const excel = require('node-excel-export');


const styles = {
  headerDark: {
    fill: {
      fgColor: {
        rgb: 'bdbdbd'
      }
    },
    font: {
      color: {
        rgb: 'FF000000'
      },
      sz: 12
    }
  },
  cellPink: {
    fill: {
      fgColor: {
        rgb: 'FFFFCCFF'
      }
    }
  },
  cellGreen: {
    fill: {
      fgColor: {
        rgb: 'FF00FF00'
      }
    }
  }
};

function getSql(query) {
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

function exeSqlMy(sql, idUser) {
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

function exeSqlAll(sql, idUser) {
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

function exeSqlDataForm(sql, idEvent) {
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

function exeSqlDataGridForm(sql, idStructureInformation) {
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

function exeSqlDataGridFormservice(sql, idService) {
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

function exeSql(sql, params) {
  return db
    .query(sql, {
      replacements: params,
      type: db.QueryTypes.SELECT
    })
    .then(t => {
      return t;
    })
    .catch(err => {
      return err;
    });
}

function createExcelReport(res, data) {
  const specification = {
    surveyor: {
      displayName: 'surveyor',
      width: 200,
      headerStyle: styles.headerDark
    },
    date_create: {
      displayName: 'date create',
      width: 200,
      headerStyle: styles.headerDark
    },
    watherConditions: {
      displayName: 'wather Conditions',
      width: 200,
      headerStyle: styles.headerDark
    },
    temperature: {
      displayName: 'temperature',
      width: 200,
      headerStyle: styles.headerDark
    },
    directionToSite: {
      displayName: 'direction To Site',
      width: 200,
      headerStyle: styles.headerDark
    },
    name: {
      displayName: 'name',
      width: 200,
      headerStyle: styles.headerDark
    },
    owner: {
      displayName: 'owner',
      width: 200,
      headerStyle: styles.headerDark
    },
    address: {
      displayName: 'address',
      width: 200,
      headerStyle: styles.headerDark
    },
    state: {
      displayName: 'state',
      width: 200,
      headerStyle: styles.headerDark
    },
    city: {
      displayName: 'city',
      width: 200,
      headerStyle: styles.headerDark
    },
    zip: {
      displayName: 'zip',
      width: 200,
      headerStyle: styles.headerDark
    },
    county: {
      displayName: 'country',
      width: 200,
      headerStyle: styles.headerDark
    },
    location_type: {
      displayName: 'location type',
      width: 200,
      headerStyle: styles.headerDark
    },
    loam: {
      displayName: 'loam',
      width: 200,
      headerStyle: styles.headerDark
    },
    send_and_gravel: {
      displayName: 'send and gravel',
      width: 200,
      headerStyle: styles.headerDark
    },
    shale: {
      displayName: 'shale',
      width: 200,
      headerStyle: styles.headerDark
    },
    clay: {
      displayName: 'clay',
      width: 200,
      headerStyle: styles.headerDark
    },
    limestone: {
      displayName: 'limestone',
      width: 200,
      headerStyle: styles.headerDark
    },
    sandstone: {
      displayName: 'sandstone',
      width: 200,
      headerStyle: styles.headerDark
    },
    granite: {
      displayName: 'granite',
      width: 200,
      headerStyle: styles.headerDark
    },
    slate: {
      displayName: 'slate',
      width: 200,
      headerStyle: styles.headerDark
    },
    other: {
      displayName: 'other',
      width: 200,
      headerStyle: styles.headerDark
    },
    accessRoad: {
      displayName: 'access Road',
      width: 200,
      headerStyle: styles.headerDark
    },
    typeAccessRoad: {
      displayName: ' type Access Road',
      width: 200,
      headerStyle: styles.headerDark
    },
    required4x4: {
      displayName: 'required 4x4',
      width: 200,
      headerStyle: styles.headerDark
    },
    ac_power_available: {
      displayName: 'ac power available',
      width: 200,
      headerStyle: styles.headerDark
    },
    solar_power: {
      displayName: 'solar power',
      width: 200,
      headerStyle: styles.headerDark
    },
    sizeSolarPower: {
      displayName: 'size Solar Power',
      width: 200,
      headerStyle: styles.headerDark
    },
    pointOfContact: {
      displayName: 'point Of Contact',
      width: 200,
      headerStyle: styles.headerDark
    },
    phone: {
      displayName: 'phone',
      width: 200,
      headerStyle: styles.headerDark
    },
    latitude: {
      displayName: 'latitude',
      width: 200,
      headerStyle: styles.headerDark
    },
    longitude: {
      displayName: 'longitude',
      width: 200,
      headerStyle: styles.headerDark
    },
    groundElevation: {
      displayName: 'ground Elevation',
      width: 200,
      headerStyle: styles.headerDark
    },
    asr_number: {
      displayName: 'asr number',
      width: 200,
      headerStyle: styles.headerDark
    },
    faa: {
      displayName: 'faa',
      width: 200,
      headerStyle: styles.headerDark
    },
    fcc_call_sign: {
      displayName: 'fcc call sign',
      width: 200,
      headerStyle: styles.headerDark
    },
    manufacturer: {
      displayName: 'manufacturer',
      width: 200,
      headerStyle: styles.headerDark
    },
    drawingNumber: {
      displayName: 'drawing Number',
      width: 200,
      headerStyle: styles.headerDark
    },
    designNumber: {
      displayName: 'design Number',
      width: 200,
      headerStyle: styles.headerDark
    },
    yearBuild: {
      displayName: 'year Build',
      width: 200,
      headerStyle: styles.headerDark
    },
    type: {
      displayName: 'type',
      width: 200,
      headerStyle: styles.headerDark
    },
    height: {
      displayName: 'height',
      width: 200,
      headerStyle: styles.headerDark
    },
    leg_type: {
      displayName: 'leg type',
      width: 200,
      headerStyle: styles.headerDark
    },
    sections: {
      displayName: 'sections',
      width: 200,
      headerStyle: styles.headerDark
    },
    general_conditions: {
      displayName: 'general conditions',
      width: 200,
      headerStyle: styles.headerDark
    },
    topOfTaper: {
      displayName: 'top Of Taper',
      width: 200,
      headerStyle: styles.headerDark
    },
    legSize: {
      displayName: 'leg Size',
      width: 200,
      headerStyle: styles.headerDark
    },
    caissonHeight: {
      displayName: 'caisson Height',
      width: 200,
      headerStyle: styles.headerDark
    },
    locationDescription: {
      displayName: 'location Description',
      width: 200,
      headerStyle: styles.headerDark
    },
    location_fence: {
      displayName: 'location fence',
      width: 200,
      headerStyle: styles.headerDark
    },
    fence_type: {
      displayName: 'fence type',
      width: 200,
      headerStyle: styles.headerDark
    },
    fenceSize: {
      displayName: 'fence Size',
      width: 200,
      headerStyle: styles.headerDark
    },
    access_type: {
      displayName: 'access type',
      width: 200,
      headerStyle: styles.headerDark
    },
    building_type: {
      displayName: 'building type',
      width: 200,
      headerStyle: styles.headerDark
    },
    buildingOwnerIfAvailable: {
      displayName: 'building Owner If Available',
      width: 200,
      headerStyle: styles.headerDark
    },
    genset: {
      displayName: 'genset',
      width: 200,
      headerStyle: styles.headerDark
    },
    fuel_propane_tank_type: {
      displayName: 'fuel propane tank type',
      width: 200,
      headerStyle: styles.headerDark
    },
    propaneFuelTankSize: {
      displayName: 'propane Fuel Tank Size',
      width: 200,
      headerStyle: styles.headerDark
    },
    wifi: {
      displayName: 'wifi',
      width: 200,
      headerStyle: styles.headerDark
    },
    publicPrivateWifi: {
      displayName: 'public Private Wifi',
      width: 200,
      headerStyle: styles.headerDark
    },
    microwave: {
      displayName: 'microwave',
      width: 200,
      headerStyle: styles.headerDark
    },
    fiber: {
      displayName: 'fiber',
      width: 200,
      headerStyle: styles.headerDark
    },
    satellite: {
      displayName: 'satellite',
      width: 200,
      headerStyle: styles.headerDark
    },
    cable: {
      displayName: 'cable',
      width: 200,
      headerStyle: styles.headerDark
    },
    water: {
      displayName: 'water',
      width: 200,
      headerStyle: styles.headerDark
    }
  };
  // Create the excel report.
  // This function will return Buffer
  const report = excel.buildExport(
    [ // <- Notice that this is an array. Pass multiple sheets to create multi sheet report
      {
        specification, // <- Report specification
        data // <-- Report data
      }
    ]
  );
  // You can then return this straight
  // res.attachment('report.xlsx'); // This is sails.js specific (in general you need to set headers)
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', 'attachment; filename=' + 'Citaciones.xlsx');
  return res.send(report);
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

// download events
router.post('/download/:id_user', async (req, res) => {
  const query = 'SEL011';
  const extQuery = await getSql(query);
  let sentence = extQuery.query;
  const filters = req.body.filters || undefined;
  if (filters === undefined || !filters.hasOwnProperty('id_user')) {
    sentence = sentence.replace('AND e."idSystemUser" = :id_user', '');
  }
  await exeSql(sentence, filters)
    .then(data => {
      createExcelReport(res, data);
    })
    .catch(err => {
      console.log(err);
    });
});




module.exports = router;
