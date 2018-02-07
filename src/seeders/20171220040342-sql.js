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
          ORDER BY  o.date_create DESC
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
          ORDER BY  o.date_create DESC
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
          lt."description" AS locationType,
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
          apa."description" AS acPowerAvailable,
          a."solarPower",
          a."pointOfContact",
          a.phone,
          a."sizeSolarPower",
          a.latitude,
          a.longitude,
          a."groundElevation"
        FROM
          "aSiteLocationInformations" a
        JOIN "locationTypes" lt ON a."idLocationType" = lt."idLocationType"
        JOIN "acPowerAvailableTypes" apa ON a."idAcPowerAvailable" = apa."idAcPowerAvailable"
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
              o."directionToSite",
              o.identifier,
              o.site_name
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
          s."idPublicPrivateWifi" as publicPrivatewifi,
          s.phone,
          s.fiber,
          s.cable,
          s.water,
          s.satellite,
          s.microwave,
          pp.description as publicPrivatewifidesc
        FROM
          "servicesAvailables" s,
          "publicPrivateWifiTypes" pp
        WHERE
          s."idEvent" = :id_event AND
          s."idPublicPrivateWifi" = pp."idPublicPrivateWifi"
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
          gct."description" AS "generalConditionType",
          s.height,
          s."idLegType",
          lt."description" AS "legType",
          s.sections,
          s."idStructureInformationType",
          sit."description" AS "structureInformationType",
          s."towerSize",
          s."topOfTaper",
          s."legSize",
          s."caissonHeight",
          s.latitude,
          s.longitude,
          s."groundElevation"
        FROM
          "structureInformations" s
          JOIN "structureInformationTypes" sit ON s."idStructureInformationType" = sit."idStructureInformationType"
          JOIN "legTypes" lt ON s."idLegType" = lt."idLegType"
          JOIN "generalConditionTypes" gct ON s."idGeneralConditionType" = gct."idGeneralConditionType"
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
          lt."description" AS "locationType",
          c."locationDescription",
          c."locationFence",
          c."idfenceType",
          ft."description" AS "fenceType",
          c."fenceSize",
          c."idAccessType",
          at."description" AS "accessType",
          c."idBuildingType",
          bt."description" AS "buildingType",
          c."buildingOwnerIfAvailable",
          c.genset,
          c."fuePropaneTankType",
          c."propaneFuelTankSize"
        FROM
          "compounds" c
        JOIN "locationTypes" lt ON c."idLocationType" = lt."idLocationType"
        JOIN "fenceTypes" ft ON c."idfenceType" = ft."idfenceType"
        JOIN "accessTypes" at ON c."idAccessType" = at."idAccessType"
        JOIN "buildingTypes" bt ON c."idBuildingType" = bt."idBuildingType"
        WHERE
          c."idEvent" = :id_event
      `
    }, {
      queryCode: 'SEL008',
      queryName: 'GET picture log data',
      description: 'Get picture log data',
      query: `
            SELECT
              p."idpicturesLogo",
              p."idEvent",
              p.description,
              p.uuid
            FROM
              "picturesLogos" p
            WHERE
              p."idEvent" = :id_event
              AND p.state IS TRUE
            ORDER BY p."idpicturesLogo" ASC
      `
    }, {
      queryCode: 'SEL009',
      queryName: 'Get structure information grid',
      description: 'Get structure information grid',
      query: `
            SELECT
              sg."idstructureInformationGrid",
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
              AND sg."idstructureInformation" = :id_structure_information
              AND sg.state IS TRUE
      `
    }, {
      queryCode: 'SEL010',
      queryName: 'Get service available grids',
      description: 'Get service available grids',
      query: `
        SELECT
          sg."idServiceAvailableGrid",
          sg."idServicesAvailable",
          sg."idCellularServiceProvider",
          sg."idTechnologyType",
          coalesce(sg.other, cst.description)  AS descriptionc,
          tt.description
        FROM
          "serviceAvailableGrids" sg,
          "cellularServiceProviderTypes" cst,
          "technologyTypes" tt
        WHERE
          sg."idCellularServiceProvider" = cst."idCellularServiceProvider"
          AND sg."idTechnologyType" = tt."idTechnologyType"
          AND sg."idServicesAvailable" = :id_service
          AND sg.state IS TRUE
      `
    }, {
      queryCode: 'SEL011',
      queryName: 'Get events detail',
      description: 'Get events detail',
      query: `
      select
        DISTINCT ON (e."idEvent")
        o."idEvent",
        o.surveyor,
        o.date_create,
        o."watherConditions",
        o.temperature,
        o."directionToSite",
        o.identifier,
        o.site_name,
        a.name,
        a.owner,
        a.address,
        a.city,
        a.state,
        a.zip,
        a.county,
        la.description as location_type,
        CASE WHEN a.shale THEN 'Yes' ELSE 'No' END as shale,
        CASE WHEN a."sendAndGravel" THEN 'Yes' ELSE 'No' END as send_and_gravel,
        CASE WHEN a.loam THEN 'Yes' ELSE 'No' END as loam,
        CASE WHEN a.clay THEN 'Yes' ELSE 'No' END as clay,
        CASE WHEN a.limestone THEN 'Yes' ELSE 'No' END as limestone,
        CASE WHEN a.sandstone THEN 'Yes' ELSE 'No' END as sandstone,
        CASE WHEN a.granite THEN 'Yes' ELSE 'No' END as granite,
        CASE WHEN a.slate THEN 'Yes' ELSE 'No' END as slate,
        CASE WHEN a.other != '[NULL]' THEN a.other ELSE NULL END as other,
        CASE WHEN a.required4x4 THEN 'Yes' ELSE 'No' END as required4x4,
        CASE WHEN a."solarPower" THEN 'Yes' ELSE 'No' END as solar_power,
        a."typeAccessRoad",
        a."accessRoad",
        ap.description as ac_power_available,
        a."sizeSolarPower",
        a."pointOfContact",
        a.phone,
        a.latitude,
        a.longitude,
        a."groundElevation",
        s.asr_number,
        s.faa,
        s.fcc_call_sign,
        s.owner,
        s.manufacturer,
        s."drawingNumber",
        s."designNumber",
        s."yearBuild",
        st.description as type,
        s.height,
        lt.description leg_type,
        s.sections,
        gn.description as general_conditions,
        s."topOfTaper",
        s."topOfTaper",
        s."legSize",
        s."caissonHeight",
        s.latitude,
        s.longitude,
        s."groundElevation",
        lty.description as location_type,
        c."locationDescription",
        CASE WHEN c."locationFence" THEN 'Yes' ELSE 'No' END as location_fence,
        ft.description as fence_type,
        c."fenceSize",
        aty.description as access_type,
        bt.description as building_type,
        c."buildingOwnerIfAvailable",
        CASE WHEN c.genset THEN 'Yes' ELSE 'No' END as genset,
        CASE WHEN c."fuePropaneTankType" THEN 'Yes' ELSE 'No' END as fuel_propane_tank_type,
        c."propaneFuelTankSize",
        ppw.description as idPublicPrivateWifi,
        CASE WHEN sa.wifi THEN 'Yes' ELSE 'No' END as wifi,
        CASE WHEN sa.phone THEN 'Yes' ELSE 'No' END as phone,
        CASE WHEN sa.microwave THEN 'Yes' ELSE 'No' END as microwave,
        CASE WHEN sa.fiber THEN 'Yes' ELSE 'No' END as fiber,
        CASE WHEN sa.satellite THEN 'Yes' ELSE 'No' END as satellite,
        CASE WHEN sa.cable THEN 'Yes' ELSE 'No' END as cable,
        CASE WHEN sa.water THEN 'Yes' ELSE 'No' END as water
      from
        events as e,
        "oSurveyInformations" as o,
        "aSiteLocationInformations" as a,
        "structureInformations" as s,
        compounds as c,
        "servicesAvailables" as sa,
        "locationTypes" as la,
        "acPowerAvailableTypes" ap,
        "structureInformationTypes" st,
        "legTypes" lt,
        "generalConditionTypes" gn,
        "locationTypes" as lty,
        "fenceTypes" as ft,
        "accessTypes" as aty,
        "buildingTypes" as bt,
        "publicPrivateWifiTypes" as ppw
      WHERE
        e."idEvent" = o."idEvent"
        AND e."idEvent" = a."idEvent"
        AND e."idEvent" = s."idEvent"
        AND e."idEvent" = c."idEvent"
        AND e."idEvent" = s."idEvent"
        AND a."idLocationType" = la."idLocationType"
        AND a."idAcPowerAvailable" = ap."idAcPowerAvailable"
        AND s."idStructureInformationType" = st."idStructureInformationType"
        AND s."idLegType" = lt."idLegType"
        AND s."idGeneralConditionType" = gn."idGeneralConditionType"
        AND c."idLocationType" = lty."idLocationType"
        AND c."idfenceType" = ft."idfenceType"
        AND c."idAccessType" = aty."idAccessType"
        AND c."idBuildingType" = bt."idBuildingType"
        AND e."idSystemUser" = :id_user
        AND sa."idPublicPrivateWifi" = ppw."idPublicPrivateWifi"
      `
    }, {
      queryCode: 'SEL012',
      queryName: 'Get Structure informations grids exel',
      description: 'Get Structure informations grids exel',
      query: `
            SELECT
              sg."idstructureInformation",
              at.description AS descantena,
              sg.height,
              sg."legLocation",
              sg.qty,
              sg.azimuth,
              sg.lines
            FROM
              "structureInformationGrids" sg,
              "antenaTypes" at
            WHERE
              at."idAntenaType" = sg."idAntenaType"
            AND sg.state IS TRUE
      `
    }, {
      queryCode: 'SEL013',
      queryName: 'Get Service availables grids exel',
      description: 'Get Service availables grids exel',
      query: `
            SELECT
              sg."idServicesAvailable",
              coalesce(sg.other, cst.description) AS descriptionc,
              tt.description
            FROM
              "serviceAvailableGrids" sg,
              "cellularServiceProviderTypes" cst,
              "technologyTypes" tt
            WHERE
              sg."idCellularServiceProvider" = cst."idCellularServiceProvider"
              AND sg."idTechnologyType" = tt."idTechnologyType"
              AND sg.state IS TRUE
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
