import express from 'express';
import cookie from '../middlewares/coockie-session.js';
import {
  oSurveyInformations,
  aSiteLocationInformations,
  structureInformations,
  compounds,
  servicesAvailables
} from '../models';

const router = express.Router();

// o survey information
router.put('/osurvey-information/:id_user&:id_event', ...cookie, (req, res) => {
  oSurveyInformations.findOne({
    where: {
      idEvent: req.params.id_event
    }
  }).then((data) => {
    return data.updateAttributes({
      surveyor: req.body.surveyor,
      watherConditions: req.body.weather_conditions,
      temperature: req.body.temperature,
      directionToSite: req.body.directions_to_site
    });
  }).then(() => {
    res.json({
      success: true,
      msg: 'Successful update'
    });
  }).catch(() => {
    res.json({
      success: false,
      msg: 'Error updating'
    });
  });
});

// asite location information
router.put('/asite-location-information/:id_user&:id_event', ...cookie, (req, res) => {
  aSiteLocationInformations.findOne({
    where: {
      idEvent: req.params.id_event
    }
  }).then((data) => {
    return data.updateAttributes({
      name: req.body.name,
      owner: req.body.owner,
      address: req.body.address,
      state: req.body.state,
      city: req.body.city,
      county: req.body.county,
      zip: req.body.zip,
      idLocationType: req.body.location_type,
      loam: req.body.loam,
      clay: req.body.clay,
      granite: req.body.granite,
      sendAndGravel: req.body.sand_and_gravel,
      limestone: req.body.limestone,
      slate: req.body.slate,
      shale: req.body.shale,
      sandstone: req.body.sandstone,
      other: req.body.other,
      accessRoad: req.body.access_road,
      typeAccessRoad: req.body.type_of_access_road,
      required4x4: req.body._4x4_required,
      idAcPowerAvailable: req.body.ac_power_available,
      solarPower: req.body.solar_power,
      sizeSolarPower: req.body.size_solar_power,
      pointOfContact: req.body.point_of_contact,
      phone: req.body.phone,
      latitude: req.body.latitude,
      groundElevation: req.body.ground_elevation
    });
  }).then(() => {
    res.json({
      success: true,
      msg: 'Successful update'
    });
  }).catch((err) => {
    res.json({
      success: false,
      msg: 'Error updating'+err
    });
  });
});

// structure information
router.put('/structure-information/:id_user&:id_event', ...cookie, (req, res) => {
  structureInformations.findOne({
    where: {
      idEvent: req.params.id_event
    }
  }).then((data) => {
    return data.updateAttributes({
      asr_number: req.body.asr_number,
      faa: req.body.faa,
      fcc_call_sign: req.body.fcc_call_sign,
      owner: req.body.owner,
      manufacturer: req.body.manufacturer,
      drawingNumber: req.body.drawing_number,
      designNumber: req.body.design_number,
      yearBuild: req.body.year_built,
      idStructureInformationType: req.body.type,
      height: req.body.height,
      idLegType: req.body.leg_type,
      sections: req.body.sections,
      idGeneralConditionType: req.body.general_condition,
      towerSize: req.body.tower_size,
      topOfTaper: req.body.top_of_taper,
      legSize: req.body.leg_size,
      caissonHeight: req.body.caisson_height,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      groundElevation: req.body.ground_elevation
    });
  }).then(() => {
    res.json({
      success: true,
      msg: 'Successful update'
    });
  }).catch((err) => {
    res.json({
      success: false,
      msg: 'Error updating'+err
    });
  });
});

// compound
router.put('/compound/:id_user&:id_event', ...cookie, (req, res) => {
  compounds.findOne({
    where: {
      idEvent: req.params.id_event
    }
  }).then((data) => {
    return data.updateAttributes({
      idLocationType: req.body.location_type,
      locationDescription: req.body.location_description,
      locationFence: req.body.location_fence,
      idfenceType: req.body.fence_type,
      fenceSize: req.body.fence_size,
      idAccessType: req.body.access,
      idBuildingType: req.body.building_type,
      buildingOwnerIfAvailable: req.body.building_owner_if_available,
      genset: req.body.genset,
      fuePropaneTankType: req.body.fue_Propane_tank_type,
      propaneFuelTankSize: req.body.propane_fuel_tank_size
    });
  }).then(() => {
    res.json({
      success: true,
      msg: 'Successful update'
    });
  }).catch((err) => {
    res.json({
      success: false,
      msg: 'Error updating'+err
    });
  });
});

// services available
router.put('/services-available/:id_user&:id_event', ...cookie, (req, res) => {
  servicesAvailables.findOne({
    where: {
      idEvent: req.params.id_event
    }
  }).then((data) => {
    return data.updateAttributes({
      wifi: req.body.wifi,
      publicPrivateWifi: req.body.public_private_wifi,
      phone: req.body.phone,
      fiber: req.body.fiber,
      cable: req.body.cable,
      water: req.body.water,
      microwave: req.body.microwave,
      satellite: req.body.satellite
    });
  }).then(() => {
    res.json({
      success: true,
      msg: 'Successful update'
    });
  }).catch(() => {
    res.json({
      success: false,
      msg: 'Error updating'
    });
  });
});

module.exports = router;
