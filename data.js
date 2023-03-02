var APP_DATA = {
  "scenes": [
    {
      "id": "0-calle",
      "name": "calle",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.6929285663094404,
        "pitch": -0.03015812120753658,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.6578431736249186,
          "pitch": 0.09590468567616739,
          "rotation": 0,
          "target": "1-fachada-frente"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-fachada-frente",
      "name": "fachada frente",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9146984931799444,
          "pitch": 0.09819796690976901,
          "rotation": 0,
          "target": "0-calle"
        },
        {
          "yaw": -0.7714191624864917,
          "pitch": 0.0793619663417644,
          "rotation": 0,
          "target": "2-ingreso-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ingreso-",
      "name": "ingreso ",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5645605845736767,
        "pitch": -0.09550071715717223,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.5888542446495713,
          "pitch": 0.15681216785035623,
          "rotation": 0,
          "target": "1-fachada-frente"
        },
        {
          "yaw": 0.5101143239763086,
          "pitch": 0.041865453834411426,
          "rotation": 0,
          "target": "3-ingreso-02"
        },
        {
          "yaw": 2.215331134703538,
          "pitch": 0.11970451166361862,
          "rotation": 0,
          "target": "14-frente-lateral"
        },
        {
          "yaw": 1.4393813343413973,
          "pitch": 0.06353831920019992,
          "rotation": 4.71238898038469,
          "target": "21-ingreso-cochera"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-ingreso-02",
      "name": "ingreso 02",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.1638472359015246,
        "pitch": 0.04775035857858789,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.08861433862863599,
          "pitch": 0.10770976191932391,
          "rotation": 0,
          "target": "4-ingreso-interior"
        },
        {
          "yaw": -2.9678443210921426,
          "pitch": 0.08232829387458374,
          "rotation": 0,
          "target": "1-fachada-frente"
        },
        {
          "yaw": 2.234623032294751,
          "pitch": 0.08426754165120087,
          "rotation": 0,
          "target": "14-frente-lateral"
        },
        {
          "yaw": 1.499678250098702,
          "pitch": 0.11353144685005745,
          "rotation": 4.71238898038469,
          "target": "21-ingreso-cochera"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-ingreso-interior",
      "name": "ingreso interior",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.4871988364127455,
        "pitch": 0.2767855789230289,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 2.5852914358670738,
          "pitch": 0.0640660031409439,
          "rotation": 0,
          "target": "6-cocina"
        },
        {
          "yaw": -3.097524893363353,
          "pitch": 0.07903453438038177,
          "rotation": 0,
          "target": "7-comerdor-01"
        },
        {
          "yaw": -2.339778551978066,
          "pitch": 0.15161268226272995,
          "rotation": 0,
          "target": "23-living"
        },
        {
          "yaw": -0.5416138943100428,
          "pitch": 0.18142918975996025,
          "rotation": 0,
          "target": "3-ingreso-02"
        },
        {
          "yaw": 1.2877424422708508,
          "pitch": 0.22292468200714488,
          "rotation": 0,
          "target": "30-escaleras"
        },
        {
          "yaw": 2.224422069049835,
          "pitch": 0.11738105821155109,
          "rotation": 4.71238898038469,
          "target": "29-toilette"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-cochera",
      "name": "cochera",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.6014427927018087,
        "pitch": 0.1737475548643186,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.578251419628618,
          "pitch": 0.09793031104002381,
          "rotation": 0,
          "target": "21-ingreso-cochera"
        },
        {
          "yaw": -0.6738728916870187,
          "pitch": 0.11005715340714772,
          "rotation": 0,
          "target": "28-sala-de-estar"
        },
        {
          "yaw": 0.4839594119264419,
          "pitch": 0.06894232685631252,
          "rotation": 0,
          "target": "24-parque-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-cocina",
      "name": "cocina",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.25289464671754125,
        "pitch": 0.11811930806281445,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 1.8773629461337569,
          "pitch": 0.04508263855342953,
          "rotation": 0,
          "target": "28-sala-de-estar"
        },
        {
          "yaw": -3.084981336465521,
          "pitch": 0.0519313427704553,
          "rotation": 0,
          "target": "7-comerdor-01"
        },
        {
          "yaw": -2.4509041334471213,
          "pitch": -0.03525182773415381,
          "rotation": 1.5707963267948966,
          "target": "23-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-comerdor-01",
      "name": "comerdor 01",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.9009835808134152,
        "pitch": 0.2030788637320864,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 2.016847032380257,
          "pitch": 0.060085635669953064,
          "rotation": 0,
          "target": "6-cocina"
        },
        {
          "yaw": 2.668713430738282,
          "pitch": 0.08753905178188859,
          "rotation": 4.71238898038469,
          "target": "28-sala-de-estar"
        },
        {
          "yaw": -0.11310937843964375,
          "pitch": 0.15500072386097585,
          "rotation": 0,
          "target": "28-sala-de-estar"
        },
        {
          "yaw": 0.31032208133259154,
          "pitch": 0.08621590643424426,
          "rotation": 0,
          "target": "3-ingreso-02"
        },
        {
          "yaw": 1.3008503367687752,
          "pitch": 0.14338672539363273,
          "rotation": 0,
          "target": "22-lavadero"
        },
        {
          "yaw": 0.8290592998747641,
          "pitch": 0.10150797500658015,
          "rotation": 0,
          "target": "29-toilette"
        },
        {
          "yaw": 2.893569839317271,
          "pitch": 0.17902299099763042,
          "rotation": 3.141592653589793,
          "target": "8-comedor-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-comedor-02",
      "name": "comedor 02",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06419107370541788,
          "pitch": 0.04502534852603013,
          "rotation": 0,
          "target": "23-living"
        },
        {
          "yaw": 1.2456668919753309,
          "pitch": 0.12144149011093752,
          "rotation": 0,
          "target": "6-cocina"
        },
        {
          "yaw": 2.4809249002960208,
          "pitch": 0.14168164950694617,
          "rotation": 4.71238898038469,
          "target": "28-sala-de-estar"
        },
        {
          "yaw": 2.9269218728076067,
          "pitch": 0.11183007016912327,
          "rotation": 0,
          "target": "17-galeria-03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-acceso-a-cuartos",
      "name": "acceso a cuartos",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5352625079238624,
          "pitch": 0.08659458876558013,
          "rotation": 0,
          "target": "11-cuarto-b-pa"
        },
        {
          "yaw": -0.4243679861345804,
          "pitch": 0.07823259377238045,
          "rotation": 0,
          "target": "12-cuarto-huespedes-pa-02"
        },
        {
          "yaw": -1.5487279903745979,
          "pitch": 0.09275928348937867,
          "rotation": 0,
          "target": "10-bao-principal-pa"
        },
        {
          "yaw": -2.24535180151722,
          "pitch": 0.09335632380906134,
          "rotation": 3.141592653589793,
          "target": "30-escaleras"
        },
        {
          "yaw": -1.3112480079412663,
          "pitch": 0.1390818119893673,
          "rotation": 1.5707963267948966,
          "target": "13-habitacin-principal-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bao-principal-pa",
      "name": "Baño principal PA",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.2651874065501794,
        "pitch": 0.5097587323286845,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.32642876110884345,
          "pitch": 0.10294000380547708,
          "rotation": 0,
          "target": "9-acceso-a-cuartos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-cuarto-b-pa",
      "name": "Cuarto B PA",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.09618512083264719,
        "pitch": 0.419759437507615,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 2.8055673464145823,
          "pitch": 0.13102764531932465,
          "rotation": 0,
          "target": "9-acceso-a-cuartos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-cuarto-huespedes-pa-02",
      "name": "Cuarto huespedes PA 02",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.195060888770712,
        "pitch": 0.48154567301458684,
        "fov": 1.1989879464110744
      },
      "linkHotspots": [
        {
          "yaw": -2.066950856118485,
          "pitch": 0.07361015793484249,
          "rotation": 0,
          "target": "9-acceso-a-cuartos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-habitacin-principal-pa",
      "name": "Habitación principal PA",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.674668768747658,
        "pitch": 0.3213003440858202,
        "fov": 1.1989879464110744
      },
      "linkHotspots": [
        {
          "yaw": 2.6808813824230935,
          "pitch": 0.1117744854820657,
          "rotation": 1.5707963267948966,
          "target": "19-guardaropa-cuarto-principal-pa"
        },
        {
          "yaw": -1.9357822182054534,
          "pitch": 0.09723107545965526,
          "rotation": 0,
          "target": "9-acceso-a-cuartos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-frente-lateral",
      "name": "frente lateral",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.654586677370613,
        "pitch": -0.16198669006491073,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.10990699439514451,
          "pitch": 0.0635304621363435,
          "rotation": 0,
          "target": "5-cochera"
        },
        {
          "yaw": -1.0494921681009242,
          "pitch": 0.047983841997009336,
          "rotation": 0,
          "target": "3-ingreso-02"
        },
        {
          "yaw": -2.8435330867585993,
          "pitch": 0.1631541067449156,
          "rotation": 0,
          "target": "1-fachada-frente"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-barra-galera",
      "name": "Barra galería",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.21238072492819526,
        "pitch": 0.14033471552985866,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 2.2405457631615047,
          "pitch": 0.0854193750595087,
          "rotation": 0,
          "target": "24-parque-02"
        },
        {
          "yaw": 0.15430343006523373,
          "pitch": 0.12065152619999964,
          "rotation": 0,
          "target": "16-parrilla"
        },
        {
          "yaw": -1.8577489580176305,
          "pitch": 0.19750948698579762,
          "rotation": 0,
          "target": "28-sala-de-estar"
        },
        {
          "yaw": -2.5670060280598577,
          "pitch": 0.03837813828861414,
          "rotation": 1.5707963267948966,
          "target": "5-cochera"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-parrilla",
      "name": "parrilla",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.984491750610829,
        "pitch": 0.08133553901423163,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.29002587891223186,
          "pitch": 0.045583843083885967,
          "rotation": 0,
          "target": "17-galeria-03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-galeria-03",
      "name": "galeria 03",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.676765169130075,
        "pitch": 0.17843555047786808,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 2.9794078680652927,
          "pitch": 0.12196320981873754,
          "rotation": 0,
          "target": "24-parque-02"
        },
        {
          "yaw": 1.5856996962209786,
          "pitch": 0.08921766340530723,
          "rotation": 0,
          "target": "15-barra-galera"
        },
        {
          "yaw": -0.2309045491801669,
          "pitch": 0.11838400132724303,
          "rotation": 0,
          "target": "28-sala-de-estar"
        },
        {
          "yaw": -1.6907055196517753,
          "pitch": 0.04144570309128426,
          "rotation": 1.5707963267948966,
          "target": "5-cochera"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-galeria-04",
      "name": "galeria 04",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "19-guardaropa-cuarto-principal-pa",
      "name": "guardaropa cuarto principal PA",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.1353520644403723,
        "pitch": 0.29655485854068253,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -3.047119515351431,
          "pitch": 0.10181644668414336,
          "rotation": 0,
          "target": "13-habitacin-principal-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-igreso-a-toillete-y-lavadero",
      "name": "igreso a toillete y lavadero",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5160077780513692,
        "pitch": 0.07969182448357692,
        "fov": 1.1989879464110744
      },
      "linkHotspots": [
        {
          "yaw": -0.2525573136726891,
          "pitch": 0.04098267323095328,
          "rotation": 0,
          "target": "29-toilette"
        },
        {
          "yaw": 1.31399240663524,
          "pitch": 0.01733319080604545,
          "rotation": 0,
          "target": "22-lavadero"
        },
        {
          "yaw": -2.0139337969234568,
          "pitch": 0.123427686858264,
          "rotation": 0,
          "target": "23-living"
        },
        {
          "yaw": -1.0761759914273625,
          "pitch": 0.043800812243114606,
          "rotation": 0,
          "target": "3-ingreso-02"
        },
        {
          "yaw": 1.9633546038080656,
          "pitch": 0.13956136557608723,
          "rotation": 0,
          "target": "6-cocina"
        },
        {
          "yaw": 2.447187345656981,
          "pitch": 0.03300457151357783,
          "rotation": 0,
          "target": "28-sala-de-estar"
        },
        {
          "yaw": 2.737268279578073,
          "pitch": 0.028885263050581145,
          "rotation": 1.5707963267948966,
          "target": "7-comerdor-01"
        },
        {
          "yaw": -0.7135908741730077,
          "pitch": -0.04247996938458698,
          "rotation": 0.7853981633974483,
          "target": "30-escaleras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-ingreso-cochera",
      "name": "ingreso cochera",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10492050698728406,
          "pitch": 0.07573921639546377,
          "rotation": 0,
          "target": "5-cochera"
        },
        {
          "yaw": -2.9700187403882836,
          "pitch": 0.09181432641089948,
          "rotation": 0,
          "target": "14-frente-lateral"
        },
        {
          "yaw": -2.3047187234098345,
          "pitch": 0.053051955225047465,
          "rotation": 0,
          "target": "23-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-lavadero",
      "name": "lavadero",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.9800525126330655,
        "pitch": 0.8033144550564622,
        "fov": 1.1989879464110744
      },
      "linkHotspots": [
        {
          "yaw": 2.77239191759371,
          "pitch": 0.11018579024550945,
          "rotation": 0,
          "target": "20-igreso-a-toillete-y-lavadero"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-living",
      "name": "living",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.4024942968884986,
        "pitch": 0.12314566159742135,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 1.798334029117318,
          "pitch": 0.09401224570618183,
          "rotation": 0,
          "target": "22-lavadero"
        },
        {
          "yaw": 1.3135626988018245,
          "pitch": 0.1267583617987782,
          "rotation": 0,
          "target": "29-toilette"
        },
        {
          "yaw": 0.49374296403224527,
          "pitch": 0.056541203056326594,
          "rotation": 4.71238898038469,
          "target": "4-ingreso-interior"
        },
        {
          "yaw": 0.902276941143052,
          "pitch": -0.04242316420644343,
          "rotation": 0,
          "target": "30-escaleras"
        },
        {
          "yaw": 2.2850301075032515,
          "pitch": 0.011912040667105828,
          "rotation": 4.71238898038469,
          "target": "6-cocina"
        },
        {
          "yaw": 2.860284794799263,
          "pitch": 0.1798292294856516,
          "rotation": 0,
          "target": "7-comerdor-01"
        },
        {
          "yaw": -1.6503360330208174,
          "pitch": -0.007246059678186256,
          "rotation": 0,
          "target": "21-ingreso-cochera"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-parque-02",
      "name": "parque 02",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0950268670024794,
          "pitch": 0.0354635858286656,
          "rotation": 0,
          "target": "17-galeria-03"
        },
        {
          "yaw": -0.14185963258125156,
          "pitch": 0.03239083234696771,
          "rotation": 0,
          "target": "25-parque-03"
        },
        {
          "yaw": -1.0586083865480962,
          "pitch": 0.031194372720392494,
          "rotation": 0,
          "target": "27-pileta"
        },
        {
          "yaw": -2.6898252850206,
          "pitch": 0.045136626823994774,
          "rotation": 1.5707963267948966,
          "target": "15-barra-galera"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-parque-03",
      "name": "parque 03",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.932084510507231,
          "pitch": 0.07017120487923201,
          "rotation": 0,
          "target": "24-parque-02"
        },
        {
          "yaw": -1.639650143406783,
          "pitch": 0.10620163319029352,
          "rotation": 0,
          "target": "27-pileta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-parque-04",
      "name": "parque 04",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "27-pileta",
      "name": "pileta",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.09795215189762807,
        "pitch": 0.3410913985479844,
        "fov": 1.1989879464110744
      },
      "linkHotspots": [
        {
          "yaw": -0.5283720425166987,
          "pitch": 0.02592674076315582,
          "rotation": 0,
          "target": "17-galeria-03"
        },
        {
          "yaw": -1.171007959743168,
          "pitch": 0.03971977314609454,
          "rotation": 0,
          "target": "24-parque-02"
        },
        {
          "yaw": -2.7720995633215466,
          "pitch": 0.11322192954165544,
          "rotation": 0,
          "target": "25-parque-03"
        },
        {
          "yaw": -0.0058912628489196095,
          "pitch": 0.01178190862433226,
          "rotation": 0,
          "target": "16-parrilla"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-sala-de-estar",
      "name": "sala de Estar",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.35262689097633704,
        "pitch": 0.09047436362258132,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.228603771512409,
          "pitch": 0.07503141138465175,
          "rotation": 1.5707963267948966,
          "target": "8-comedor-02"
        },
        {
          "yaw": -0.9250786410560075,
          "pitch": -0.01444549630299008,
          "rotation": 0,
          "target": "6-cocina"
        },
        {
          "yaw": -2.787918626037815,
          "pitch": 0.12710699150035154,
          "rotation": 0,
          "target": "5-cochera"
        },
        {
          "yaw": 2.84498194941735,
          "pitch": 0.08997856180625163,
          "rotation": 4.71238898038469,
          "target": "17-galeria-03"
        },
        {
          "yaw": 1.4898058149460986,
          "pitch": 0.12431518820964982,
          "rotation": 0,
          "target": "15-barra-galera"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-toilette",
      "name": "toilette",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.2608577634764746,
        "pitch": 0.0013890548567196959,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -3.0445240312089474,
          "pitch": 0.09853468021465517,
          "rotation": 0,
          "target": "20-igreso-a-toillete-y-lavadero"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-escaleras",
      "name": "escaleras",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.007159405436301,
        "pitch": 0.08556325302278012,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.7211896184224145,
          "pitch": -0.21759934224228772,
          "rotation": 0,
          "target": "9-acceso-a-cuartos"
        },
        {
          "yaw": -1.1946195682848266,
          "pitch": 0.21649398943579712,
          "rotation": 3.141592653589793,
          "target": "4-ingreso-interior"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
