export const classItem = {
  "data": {
      "class_id": 929,
      "group_name": "Thermal Zones and Surfaces",
      "group_id": 6,
      "memo": " Allows for detailed entry of building heat transfer surfaces. Does not include subsurfaces such as windows or doors.",
      "class_name": "BuildingSurface:Detailed",
      "options": {
          "min-fields": "20",
          "extensible": "3",
          "format": "vertices"
      },
      "categories": [],
      "fields": [
          {
              "field_name": "Name",
              "jdd_name": "name",
              "idd_name": "A1",
              "field_id": 14300,
              "options": {
                  "required-field": "1",
                  "type": "alpha"
              },
              "references": [
                  "AllHeatTranAngFacNames",
                  "AllHeatTranSurfNames",
                  "AllShadingAndHTSurfNames",
                  "FloorSurfaceNames",
                  "OutFaceEnvNames",
                  "RadiantSurfaceNames",
                  "SurfaceNames",
                  "SurfAndSubSurfNames"
              ]
          },
          {
              "field_name": "Surface Type",
              "jdd_name": "surface_type",
              "idd_name": "A2",
              "field_id": 14301,
              "options": {
                  "required-field": "1",
                  "type": "choice",
                  "choices": [
                      "Ceiling",
                      "Floor",
                      "Roof",
                      "Wall"
                  ]
              },
              "references": []
          },
          {
              "field_name": "Construction Name",
              "jdd_name": "construction_name",
              "idd_name": "A3",
              "field_id": 14302,
              "options": {
                  "required-field": "1",
                  "type": "object-list",
                  "object-list": [
                      "ConstructionNames"
                  ]
              },
              "references": []
          },
          {
              "field_name": "Zone Name",
              "jdd_name": "zone_name",
              "idd_name": "A4",
              "field_id": 14303,
              "options": {
                  "required-field": "1",
                  "type": "object-list",
                  "object-list": [
                      "ZoneNames"
                  ]
              },
              "references": []
          },
          {
              "field_name": "Space Name",
              "jdd_name": "space_name",
              "idd_name": "A5",
              "field_id": 14304,
              "options": {
                  "type": "object-list",
                  "object-list": [
                      "SpaceNames"
                  ]
              },
              "references": []
          },
          {
              "field_name": "Outside Boundary Condition",
              "jdd_name": "outside_boundary_condition",
              "idd_name": "A6",
              "field_id": 14305,
              "options": {
                  "required-field": "1",
                  "type": "choice",
                  "choices": [
                      "Adiabatic",
                      "Foundation",
                      "Ground",
                      "GroundBasementPreprocessorAverageFloor",
                      "GroundBasementPreprocessorAverageWall",
                      "GroundBasementPreprocessorLowerWall",
                      "GroundBasementPreprocessorUpperWall",
                      "GroundFCfactorMethod",
                      "GroundSlabPreprocessorAverage",
                      "GroundSlabPreprocessorCore",
                      "GroundSlabPreprocessorPerimeter",
                      "OtherSideCoefficients",
                      "OtherSideConditionsModel",
                      "Outdoors",
                      "Surface",
                      "Zone"
                  ]
              },
              "references": []
          },
          {
              "field_name": "Outside Boundary Condition Object",
              "jdd_name": "outside_boundary_condition_object",
              "idd_name": "A7",
              "field_id": 14306,
              "options": {
                  "type": "object-list",
                  "object-list": [
                      "OutFaceEnvNames"
                  ]
              },
              "references": []
          },
          {
              "field_name": "Sun Exposure",
              "jdd_name": "sun_exposure",
              "idd_name": "A8",
              "field_id": 14307,
              "options": {
                  "default": "SunExposed",
                  "type": "choice",
                  "choices": [
                      "NoSun",
                      "SunExposed"
                  ]
              },
              "references": []
          },
          {
              "field_name": "Wind Exposure",
              "jdd_name": "wind_exposure",
              "idd_name": "A9",
              "field_id": 14308,
              "options": {
                  "default": "WindExposed",
                  "type": "choice",
                  "choices": [
                      "NoWind",
                      "WindExposed"
                  ]
              },
              "references": []
          },
          {
              "field_name": "View Factor to Ground",
              "jdd_name": "view_factor_to_ground",
              "idd_name": "N1",
              "field_id": 14309,
              "options": {
                  "minimum": "0",
                  "maximum": "1",
                  "autocalculatable": "1",
                  "type": "real",
                  "json-enum-diff": "Autocalculate"
              },
              "references": []
          },
          {
              "field_name": "Number of Vertices",
              "jdd_name": "number_of_vertices",
              "idd_name": "N2",
              "field_id": 14310,
              "options": {
                  "minimum": "3",
                  "autocalculatable": "1",
                  "json-enum-diff": "Autocalculate"
              },
              "references": []
          },
          {
              "field_name": "Vertex 1 X-coordinate",
              "jdd_name": "vertex_x_coordinate",
              "idd_name": "N3",
              "field_id": 14311,
              "options": {
                  "extensible": "vertices",
                  "required-field": "1",
                  "units": "m",
                  "type": "real"
              },
              "references": []
          },
          {
              "field_name": "Vertex 1 Y-coordinate",
              "jdd_name": "vertex_y_coordinate",
              "idd_name": "N4",
              "field_id": 14312,
              "options": {
                  "extensible": "vertices",
                  "required-field": "1",
                  "units": "m",
                  "type": "real"
              },
              "references": []
          },
          {
              "field_name": "Vertex 1 Z-coordinate",
              "jdd_name": "vertex_z_coordinate",
              "idd_name": "N5",
              "field_id": 14313,
              "options": {
                  "extensible": "vertices",
                  "required-field": "1",
                  "units": "m",
                  "type": "real"
              },
              "references": []
          }
      ]
  }
}