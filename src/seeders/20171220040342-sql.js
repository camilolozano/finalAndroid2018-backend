'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('queries', [{
      queryCode: 'SEL001',
      queryName: 'GET My events',
      description: 'Get all my events register',
      query: `
            SELECT
              e."idEvent",
              o.surveyor,
              o.date_create,
              o."directionToSite",
              o.temperature,
              o."watherConditions"
            FROM
              "events" e,
              "oSurveyInformations" o
            WHERE
              e."idEvent" = o."idEvent"
              AND e."idSystemUser" = :id_user
      `
    }, {
      queryCode: 'SEL002',
      queryName: 'GET All events',
      description: 'Get all events register',
      query: `
            SELECT
              e."idEvent",
              o.surveyor,
              o.date_create,
              o."directionToSite",
              o.temperature,
              o."watherConditions"
            FROM
              "events" e,
              "oSurveyInformations" o
            WHERE
              e."idEvent" = o."idEvent"
      `
    }, {
      queryCode: 'SEL003',
      queryName: 'GET aSiteLocationInformations data',
      description: 'Get aSiteLocationInformations data',
      query: `
            SELECT
              a."idEvent",
              a.name,
              a.owner,
              a.address,
              a.state,
              a.city,
              a.county,
              a.zip,
              a."idLocationType",
              a.loam,
              a.clay,
              a.granite,
              a."sendAndGravel",
              a.limestone,
              a.slate,
              a.shale,
              a.sandstone,
              a.other,
              a."accessRoad",
              a."typeAccessRoad",
              a.required4x4,
              a."idAcPowerAvailable",
              a."solarPower",
              a."pointOfContact",
              a.phone,
              a."sizeSolarPower",
              a.latitude,
              a.longitude,
              a."groundElevation"
            FROM
              "aSiteLocationInformations" a
            WHERE
              a."idEvent" = :id_event
      `
    }, {
      queryCode: 'SEL004',
      queryName: 'GET oSurveyInformations data',
      description: 'Get oSurveyInformations data',
      query: `
            SELECT
              o."idEvent",
              o.surveyor,
              o.date_create,
              o."watherConditions",
              o.temperature,
              o."directionToSite"
            FROM
              "oSurveyInformations" o
            WHERE
              o."idEvent" = :id_event
      `
    }, {
      queryCode: 'SEL005',
      queryName: 'GET Services Availables data',
      description: 'Get Services Availables data',
      query: `
            SELECT
              s."idServicesAvailable",
              s."idEvent",
              s.wifi,
              s."publicPrivateWifi",
              s.phone,
              s.fiber,
              s.cable,
              s.water,
              s.satellite,
              s.microwave
            FROM
              "servicesAvailables" s
            WHERE
              s."idEvent" = :id_event
      `
    }, {
      queryCode: 'SEL006',
      queryName: 'GET structureInformations data',
      description: 'Get structureInformations data',
      query: `
            SELECT
              s."idstructureInformation",
              s."idEvent",
              s.asr_number,
              s.faa,
              s.fcc_call_sign,
              s.owner,
              s.manufacturer,
              s."drawingNumber",
              s."designNumber",
              s."yearBuild",
              s."idGeneralConditionType",
              s.height,
              s."idLegType",
              s.sections,
              s."idStructureInformationType",
              s."towerSize",
              s."topOfTaper",
              s."legSize",
              s."caissonHeight",
              s.latitude,
              s.longitude,
              s."groundElevation"
            FROM
              "structureInformations" s
            WHERE
              s."idEvent" = :id_event
      `
    }, {
      queryCode: 'SEL007',
      queryName: 'GET compounds data',
      description: 'Get compounds data',
      query: `
            SELECT
              c."idEvent",
              c."idLocationType",
              c."locationDescription",
              c."locationFence",
              c."idfenceType",
              c."fenceSize",
              c."idAccessType",
              c."idBuildingType",
              c."buildingOwnerIfAvailable",
              c.genset,
              c."fuePropaneTankType",
              c."propaneFuelTankSize"
            FROM
              "compounds" c
            WHERE
              c."idEvent" = :id_event
      `
    }, {
      queryCode: 'SEL008',
      queryName: 'GET picture log data',
      description: 'Get picture log data',
      query: `
            SELECT
              p."idEvent",
              p.description,
              p.uuid
            FROM
              "picturesLogos" p
            WHERE
              p."idEvent" = :id_event
      `
    }, {
      queryCode: 'SEL009',
      queryName: 'Get structure information grid',
      description: 'Get structure information grid',
      query: `
            SELECT
              sg."idstructureInformation",
              sg."idAntenaType",
              sg.height,
              sg."legLocation",
              sg.qty,
              sg.azimuth,
              sg.lines,
              at.description AS descantena
            FROM
              "structureInformationGrids" sg,
              "antenaTypes" at
            WHERE
              at."idAntenaType" = sg."idAntenaType"
              AND sg."idstructureInformation" = :id_structure_information;
      `
    }, {
      queryCode: 'SEL010',
      queryName: 'Get service available grids',
      description: 'Get service available grids',
      query: `
            SELECT
              sg."idServicesAvailable",
              sg."idCellularServiceProvider",
              sg."idTechnologyType",
              cst.description as descriptionc,
              tt.description
            FROM
              "serviceAvailableGrids" sg,
              "cellularServiceProviderTypes" cst,
              "technologyTypes" tt
            WHERE
              sg."idCellularServiceProvider" = cst."idCellularServiceProvider"
              AND sg."idTechnologyType" = tt."idTechnologyType"
              AND sg."idServicesAvailable" = :id_service
      `
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
