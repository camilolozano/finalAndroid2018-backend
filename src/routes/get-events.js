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

function exeSqlGrids(sql) {
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

function createExcelReport(res, data, data1, data2) {
  // Forms informations
  const specification1 = {
    idEvent: {
      displayName: 'Event identifier',
      width: 200,
      headerStyle: styles.headerDark
    },
    surveyor: {
      displayName: 'Surveyor',
      width: 200,
      headerStyle: styles.headerDark
    },
    identifier: {
      displayName: 'Identifier',
      width: 200,
      headerStyle: styles.headerDark
    },
    site_name: {
      displayName: 'Site name',
      width: 200,
      headerStyle: styles.headerDark
    },
    date_create: {
      displayName: 'Sate create',
      width: 200,
      headerStyle: styles.headerDark
    },
    watherConditions: {
      displayName: 'Wather Conditions',
      width: 200,
      headerStyle: styles.headerDark
    },
    temperature: {
      displayName: 'Temperature',
      width: 200,
      headerStyle: styles.headerDark
    },
    directionToSite: {
      displayName: 'Direction To Site',
      width: 200,
      headerStyle: styles.headerDark
    },
    name: {
      displayName: 'Name',
      width: 200,
      headerStyle: styles.headerDark
    },
    owner: {
      displayName: 'Owner',
      width: 200,
      headerStyle: styles.headerDark
    },
    address: {
      displayName: 'Address',
      width: 200,
      headerStyle: styles.headerDark
    },
    state: {
      displayName: 'State',
      width: 200,
      headerStyle: styles.headerDark
    },
    city: {
      displayName: 'City',
      width: 200,
      headerStyle: styles.headerDark
    },
    zip: {
      displayName: 'Zip',
      width: 200,
      headerStyle: styles.headerDark
    },
    county: {
      displayName: 'Country',
      width: 200,
      headerStyle: styles.headerDark
    },
    location_type: {
      displayName: 'Location type',
      width: 200,
      headerStyle: styles.headerDark
    },
    loam: {
      displayName: 'Loam',
      width: 200,
      headerStyle: styles.headerDark
    },
    send_and_gravel: {
      displayName: 'Send and gravel',
      width: 200,
      headerStyle: styles.headerDark
    },
    shale: {
      displayName: 'Shale',
      width: 200,
      headerStyle: styles.headerDark
    },
    clay: {
      displayName: 'Clay',
      width: 200,
      headerStyle: styles.headerDark
    },
    limestone: {
      displayName: 'Limestone',
      width: 200,
      headerStyle: styles.headerDark
    },
    sandstone: {
      displayName: 'Sandstone',
      width: 200,
      headerStyle: styles.headerDark
    },
    granite: {
      displayName: 'Granite',
      width: 200,
      headerStyle: styles.headerDark
    },
    slate: {
      displayName: 'Slate',
      width: 200,
      headerStyle: styles.headerDark
    },
    other: {
      displayName: 'Other',
      width: 200,
      headerStyle: styles.headerDark
    },
    accessRoad: {
      displayName: 'Access Road',
      width: 200,
      headerStyle: styles.headerDark
    },
    typeAccessRoad: {
      displayName: 'Type Access Road',
      width: 200,
      headerStyle: styles.headerDark
    },
    required4x4: {
      displayName: 'Required 4x4',
      width: 200,
      headerStyle: styles.headerDark
    },
    ac_power_available: {
      displayName: 'Ac power available',
      width: 200,
      headerStyle: styles.headerDark
    },
    solar_power: {
      displayName: 'Solar power',
      width: 200,
      headerStyle: styles.headerDark
    },
    sizeSolarPower: {
      displayName: 'Size Solar Power',
      width: 200,
      headerStyle: styles.headerDark
    },
    pointOfContact: {
      displayName: 'Point Of Contact',
      width: 200,
      headerStyle: styles.headerDark
    },
    phone: {
      displayName: 'Phone',
      width: 200,
      headerStyle: styles.headerDark
    },
    latitude: {
      displayName: 'Latitude',
      width: 200,
      headerStyle: styles.headerDark
    },
    longitude: {
      displayName: 'Longitude',
      width: 200,
      headerStyle: styles.headerDark
    },
    groundElevation: {
      displayName: 'Ground Elevation',
      width: 200,
      headerStyle: styles.headerDark
    },
    asr_number: {
      displayName: 'ASR number',
      width: 200,
      headerStyle: styles.headerDark
    },
    faa: {
      displayName: 'FAA',
      width: 200,
      headerStyle: styles.headerDark
    },
    fcc_call_sign: {
      displayName: 'FCC call sign',
      width: 200,
      headerStyle: styles.headerDark
    },
    manufacturer: {
      displayName: 'Manufacturer',
      width: 200,
      headerStyle: styles.headerDark
    },
    drawingNumber: {
      displayName: 'Drawing Number',
      width: 200,
      headerStyle: styles.headerDark
    },
    designNumber: {
      displayName: 'Design Number',
      width: 200,
      headerStyle: styles.headerDark
    },
    yearBuild: {
      displayName: 'Year Build',
      width: 200,
      headerStyle: styles.headerDark
    },
    type: {
      displayName: 'Type',
      width: 200,
      headerStyle: styles.headerDark
    },
    height: {
      displayName: 'Height',
      width: 200,
      headerStyle: styles.headerDark
    },
    leg_type: {
      displayName: 'Leg type',
      width: 200,
      headerStyle: styles.headerDark
    },
    sections: {
      displayName: 'Sections',
      width: 200,
      headerStyle: styles.headerDark
    },
    general_conditions: {
      displayName: 'General conditions',
      width: 200,
      headerStyle: styles.headerDark
    },
    topOfTaper: {
      displayName: 'Top Of Taper',
      width: 200,
      headerStyle: styles.headerDark
    },
    legSize: {
      displayName: 'Leg Size',
      width: 200,
      headerStyle: styles.headerDark
    },
    caissonHeight: {
      displayName: 'Caisson Height',
      width: 200,
      headerStyle: styles.headerDark
    },
    locationDescription: {
      displayName: 'Location Description',
      width: 200,
      headerStyle: styles.headerDark
    },
    location_fence: {
      displayName: 'Location fence',
      width: 200,
      headerStyle: styles.headerDark
    },
    fence_type: {
      displayName: 'Fence type',
      width: 200,
      headerStyle: styles.headerDark
    },
    fenceSize: {
      displayName: 'Fence Size',
      width: 200,
      headerStyle: styles.headerDark
    },
    access_type: {
      displayName: 'Access type',
      width: 200,
      headerStyle: styles.headerDark
    },
    building_type: {
      displayName: 'Building type',
      width: 200,
      headerStyle: styles.headerDark
    },
    buildingOwnerIfAvailable: {
      displayName: 'Building Owner If Available',
      width: 200,
      headerStyle: styles.headerDark
    },
    genset: {
      displayName: 'Genset',
      width: 200,
      headerStyle: styles.headerDark
    },
    fuel_propane_tank_type: {
      displayName: 'Fuel propane tank type',
      width: 200,
      headerStyle: styles.headerDark
    },
    propaneFuelTankSize: {
      displayName: 'Propane Fuel Tank Size',
      width: 200,
      headerStyle: styles.headerDark
    },
    wifi: {
      displayName: 'Wifi',
      width: 200,
      headerStyle: styles.headerDark
    },
    publicPrivateWifi: {
      displayName: 'Public Private Wifi',
      width: 200,
      headerStyle: styles.headerDark
    },
    microwave: {
      displayName: 'Microwave',
      width: 200,
      headerStyle: styles.headerDark
    },
    fiber: {
      displayName: 'Fiber',
      width: 200,
      headerStyle: styles.headerDark
    },
    satellite: {
      displayName: 'Satellite',
      width: 200,
      headerStyle: styles.headerDark
    },
    cable: {
      displayName: 'Cable',
      width: 200,
      headerStyle: styles.headerDark
    },
    water: {
      displayName: 'Water',
      width: 200,
      headerStyle: styles.headerDark
    }
  };

  // Structure informations grids
  const specification2 = {
    idstructureInformation: {
      displayName: 'Event identifier',
      width: 200,
      headerStyle: styles.headerDark
    },
    descantena: {
      displayName: 'Antena type',
      width: 200,
      headerStyle: styles.headerDark
    },
    height: {
      displayName: 'Height',
      width: 200,
      headerStyle: styles.headerDark
    },
    legLocation: {
      displayName: 'LegLocation',
      width: 200,
      headerStyle: styles.headerDark
    },
    qty: {
      displayName: 'qty',
      width: 200,
      headerStyle: styles.headerDark
    },
    azimuth: {
      displayName: 'Azimuth',
      width: 200,
      headerStyle: styles.headerDark
    },
    lines: {
      displayName: 'Lines',
      width: 200,
      headerStyle: styles.headerDark
    }
  };

  // Service availables grids
  const specification3 = {
    idServicesAvailable: {
      displayName: 'Event identifier',
      width: 200,
      headerStyle: styles.headerDark
    },
    descriptionc: {
      displayName: 'Cellular service provider',
      width: 200,
      headerStyle: styles.headerDark
    },
    description: {
      displayName: 'Technology type',
      width: 200,
      headerStyle: styles.headerDark
    }
  };
  // Create the excel report.
  // This function will return Buffer
  const report = excel.buildExport(
    [ // <- Notice that this is an array. Pass multiple sheets to create multi sheet report
      {
        name: 'Forms informations',
        specification: specification1, // <- Report specification
        data // <-- Report data
      },
      {
        name: 'Structure informations grids',
        specification: specification2, // <- Report specification
        data: data1 // <-- Report data
      },
      {
        name: 'Service availables grids',
        specification: specification3, // <- Report specification
        data: data2 // <-- Report data
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
  const query1 = 'SEL012';
  const query2 = 'SEL013';

  // get all data forms
  const extQuery = await getSql(query);
  let sentence = extQuery.query;
  const filters = req.body.filters || undefined;
  if (filters === undefined || !filters.hasOwnProperty('id_user')) {
    sentence = sentence.replace('AND e."idSystemUser" = :id_user', '');
  }
  // get all data Structure informations grids
  const extQuery1 = await getSql(query1);
  // get all data Service availables grids exel
  const extQuery2 = await getSql(query2);

  exeSql(sentence, filters).then((data) => {
    exeSqlGrids(extQuery1).then((data1) => {
      exeSqlGrids(extQuery2).then((data2) => {
        console.log(data, data1, data2);
        return createExcelReport(res, data, data1, data2);
      });
    });
  });
});

module.exports = router;
