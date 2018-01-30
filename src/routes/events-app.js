import express from 'express';
import models from '../models/index';
import {
  oSurveyInformations,
  aSiteLocationInformations,
  compounds,
  servicesAvailables,
  structureInformations,
  picturesLogos,
  events,
  serviceAvailableGrids,
  structureInformationGrids
} from '../models';
import jwt from '../middlewares/jwt';

const db = models.sequelize;
const router = express.Router();

function setTrasactionEvents(data, user) {
  let idEvent = '';
  let idServicesAvailable = '';
  let idstructureInformation = '';
  const {
    OSurveyInformation,
    ASitelocationinformation,
    Compound,
    ServicesAvailables,
    StructureInformation,
    PicturesLog
  } = data;
  const { gridData: gridServicesAvailables } = ServicesAvailables;
  const { gridData: gridStructureInformation } = StructureInformation;
  console.log(data.finished === true);
  if (data.finished === true) {
    return db.transaction(t => {
      return events
        .create(
        {
          idSystemUser: user
        },
        { transaction: t }
        )
        .then(eventT => {
          idEvent = eventT.idEvent;
          const { weather_conditions, temperature, surveyor, directions_to_site, date_create } = OSurveyInformation;
          return oSurveyInformations
            .create(
            {
              idEvent: idEvent,
              surveyor: surveyor,
              date_create: date_create,
              watherConditions: weather_conditions,
              temperature: temperature,
              directionToSite: directions_to_site
            },
            { transaction: t }
            )
            .then(respuesta => {
              const {
                latitude,
                longitude,
                ground_elevation,
                name,
                owner,
                address,
                city,
                state,
                zip,
                county,
                location_type,
                loam,
                clay,
                granite,
                sand_and_gravel,
                limestone,
                slate,
                shale,
                sandstone,
                other,
                access_road,
                type_of_access_road,
                _4x4_required,
                ac_power_available,
                solar_power,
                size_solar_power,
                point_of_contact,
                phone
              } = ASitelocationinformation;
              return aSiteLocationInformations
                .create(
                {
                  idEvent: idEvent,
                  name: name,
                  owner: owner,
                  address: address,
                  county: county,
                  state: state,
                  city: city,
                  zip: zip,
                  idLocationType: location_type,
                  loam: loam,
                  clay: clay,
                  granite: granite,
                  sendAndGravel: sand_and_gravel,
                  limestone: limestone,
                  slate: slate,
                  shale: shale,
                  sandstone: sandstone,
                  other: other,
                  accessRoad: access_road,
                  typeAccessRoad: type_of_access_road,
                  required4x4: _4x4_required,
                  idAcPowerAvailable: ac_power_available,
                  solarPower: solar_power,
                  sizeSolarPower: size_solar_power,
                  pointOfContact: point_of_contact,
                  phone: phone,
                  latitude: latitude,
                  longitude: longitude,
                  groundElevation: ground_elevation
                },
                { transaction: t }
                )
                .then(() => {
                  const {
                    location_type,
                    location_description,
                    location_fence,
                    fence_type,
                    fence_size,
                    access,
                    building_type,
                    building_owner_if_available,
                    genset,
                    fuel_Propane_tank_type,
                    propane_fuel_tank_size
                  } = Compound;
                  return compounds
                    .create(
                    {
                      idEvent: idEvent,
                      idLocationType: location_type,
                      locationDescription: location_description,
                      locationFence: location_fence,
                      idfenceType: fence_type,
                      fenceSize: fence_size,
                      idAccessType: access,
                      idBuildingType: building_type,
                      buildingOwnerIfAvailable: building_owner_if_available,
                      genset: genset,
                      fuePropaneTankType: fuel_Propane_tank_type,
                      propaneFuelTankSize: propane_fuel_tank_size
                    },
                    { transaction: t }
                    )
                    .then(() => {
                      const {
                        Wifi,
                        Public_Private_wifi,
                        phone,
                        microwave,
                        fiber,
                        satellite,
                        cable,
                        water
                      } = ServicesAvailables;
                      return servicesAvailables
                        .create(
                        {
                          idEvent: idEvent,
                          wifi: Wifi,
                          phone: phone,
                          idPublicPrivateWifi: Public_Private_wifi,
                          fiber: fiber,
                          satellite: satellite,
                          cable: cable,
                          water: water,
                          microwave: microwave
                        },
                        { transaction: t }
                        )
                        .then(serviceAv => {
                          idServicesAvailable = serviceAv.idServicesAvailable;
                          const {
                            latitude,
                            longitude,
                            ground_elevation,
                            asr_number,
                            faa,
                            fcc_call_sign,
                            owner,
                            manufacturer,
                            drawing_number,
                            design_number,
                            year_built,
                            type,
                            height,
                            leg_type,
                            sections,
                            general_condition,
                            tower_base,
                            top_of_taper,
                            leg_size,
                            caisson_height
                          } = StructureInformation;
                          return structureInformations
                            .create(
                            {
                              idEvent: idEvent,
                              asr_number: asr_number,
                              faa: faa,
                              fcc_call_sign: fcc_call_sign,
                              owner: owner,
                              manufacturer: manufacturer,
                              drawingNumber: drawing_number,
                              designNumber: design_number,
                              yearBuild: year_built,
                              idStructureInformationType: type,
                              height: height,
                              idLegType: leg_type,
                              sections: sections,
                              idGeneralConditionType: general_condition,
                              towerSize: tower_base,
                              topOfTaper: top_of_taper,
                              legSize: leg_size,
                              caissonHeight: caisson_height,
                              latitude: latitude,
                              longitude: longitude,
                              groundElevation: ground_elevation
                            },
                            { transaction: t }
                            )
                            .then(structInf => {
                              idstructureInformation = structInf.idstructureInformation;
                              return Object.keys(PicturesLog).forEach(
                                key => {
                                  const { title, uuid } = PicturesLog[key];
                                  return picturesLogos.create({
                                    idEvent: idEvent,
                                    description: title,
                                    uuid: uuid
                                  });
                                },
                                { transaction: t }
                              );
                            })
                            .then(
                            () => {
                              for (let i = 0; i < gridServicesAvailables.length; i++) {
                                const element = gridServicesAvailables[i];
                                serviceAvailableGrids.create({
                                  idServicesAvailable: (idServicesAvailable === null || idServicesAvailable === undefined ? 3 : idServicesAvailable),
                                  idCellularServiceProvider: element[0],
                                  idTechnologyType: element[1],
                                  other: element[2]
                                });
                              }
                            },
                            { transaction: t }
                            )
                            .then(() => {
                              for (let i = 0; i < gridStructureInformation.length; i++) {
                                const element = gridStructureInformation[i];
                                structureInformationGrids.create({
                                  idstructureInformation: idstructureInformation,
                                  idAntenaType: element[0],
                                  height: element[1],
                                  legLocation: element[2],
                                  qty: element[3],
                                  azimuth: element[4],
                                  lines: element[5]
                                });
                              }
                            });
                        });
                    });
                });
            });
        });
    });
  }
}

router.post('/', ...jwt, async (req, res) => {
  const transactionData = req.body.data;
  const user = req.body.idUser;


  const t = transactionData.map((v, i) => {
    return setTrasactionEvents(v, user);
  });

  Promise.all([t])
    .then((d) => {
      res.json({
        success: true
      });
    })
    .catch(() => {
      res.json({
        success: false
      });
    });
});

module.exports = router;
