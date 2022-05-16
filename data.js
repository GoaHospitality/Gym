var APP_DATA = {
  "scenes": [
    {
      "id": "0-1",
      "name": "1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.3551139736187832,
        "pitch": 0.26034739370295235,
        "fov": 1.1991635784062282
      },
      "linkHotspots": [
        {
          "yaw": 1.9312869259743826,
          "pitch": 0.11370664220434357,
          "rotation": 0,
          "target": "1-2"
        },
        {
          "yaw": 0.47975683564918015,
          "pitch": 0.10032652708201795,
          "rotation": 0,
          "target": "2-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2",
      "name": "2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.8361352422041897,
        "pitch": 0.6923588190051735,
        "fov": 1.1991635784062282
      },
      "linkHotspots": [
        {
          "yaw": -1.8874395510976605,
          "pitch": 0.10486252379762284,
          "rotation": 0,
          "target": "0-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3",
      "name": "3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.3973038080261233,
        "pitch": 0.6464529927953784,
        "fov": 1.1991635784062282
      },
      "linkHotspots": [
        {
          "yaw": -0.05351637869618564,
          "pitch": 0.08098455742267952,
          "rotation": 0,
          "target": "0-1"
        },
        {
          "yaw": -1.185082711405279,
          "pitch": 0.08403784996470165,
          "rotation": 0,
          "target": "1-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Gym",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
