// BY SETTING ENV TO THE VALUE BELOW
// THE DATA WILL BE STALE, BUT NO RATE LIMIT
let env = 'lldev';

// 15 req/hr && 300 req/day
// UNCOMMENT THE LINE BELOW TO USE LIVE DATA
// env = 'll';

const endpoints = {
  spacecraft: `https://${env}.thespacedevs.com/2.2.0/spacecraft/?limit=1000&offset=0`,
  /* RETURNS:
    {
      "count": 0,
      "next": "string",
      "previous": "string",
      "results": [
        {
          "id": 0,
          "url": "string",
          "name": "string",
          "serial_number": "string",
          "status": {
            "id": 0,
            "name": "string"
          },
          "description": "string",
          "spacecraft_config": {
            "id": 0,
            "url": "string",
            "name": "string",
            "type": {
              "id": 0,
              "name": "string"
            },
            "agency": {
              "id": 0,
              "url": "string",
              "name": "string",
              "type": "string"
            },
            "in_use": true,
            "image_url": "string"
          }
        }
      ]
    }
  */
  craftSearch: `https://${env}.thespacedevs.com/2.2.0/spacecraft/?limit=100&offset=0&search=`,
  /* QUERYING GEMINI RETURNS:
   {
     "count": 12,
     "next": "https://lldev.thespacedevs.com/2.2.0/spacecraft/?limit=10&offset=10&search=gemini",
     "previous": null,
     "results": [
       {
         "id": 11,
         "url": "https://lldev.thespacedevs.com/2.2.0/spacecraft/11/",
         "name": "Gemini SC1",
         "serial_number": "1",
         "status": {
           "id": 4,
           "name": "Single Use"
         },
         "description": "Gemini SC1 is the Gemini capsule used for the Gemini 1 mission launched on April 8, 1964.",
         "spacecraft_config": {
           "id": 12,
           "url": "https://lldev.thespacedevs.com/2.2.0/config/spacecraft/12/",
           "name": "Gemini",
           "type": {
             "id": 1,
             "name": "Unknown"
           },
           "agency": {
             "id": 44,
             "url": "https://lldev.thespacedevs.com/2.2.0/agencies/44/",
             "name": "National Aeronautics and Space Administration",
             "type": "Government"
           },
           "in_use": false,
           "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/orbiter_images/gemini_image_20190207032517.jpeg"
         }
       }, {}, ...
     ]
   }

  */
  craftID: `https://${env}.thespacedevs.com/2.2.0/spacecraft/`,
  /* ID OF 3 RETURNS:
    {
      "id": 3,
      "url": "https://lldev.thespacedevs.com/2.2.0/spacecraft/3/",
      "name": "Mercury No.11",
      "serial_number": "11",
      "status": {
        "id": 4,
        "name": "Single Use"
      },
      "description": "Mercury No.11 is the Mercury capsule used for the Mercury-Redstone 4 - callsign \"Liberty Bell 7\" - mission launched on July 21, 1961 and piloted by astronaut Virgil \"Gus\" Grissom.",
      "spacecraft_config": {
        "id": 11,
        "url": "https://lldev.thespacedevs.com/2.2.0/config/spacecraft/11/",
        "name": "Mercury",
        "type": {
          "id": 1,
          "name": "Unknown"
        },
        "agency": {
          "id": 44,
          "url": "https://lldev.thespacedevs.com/2.2.0/agencies/44/",
          "name": "National Aeronautics and Space Administration",
          "featured": true,
          "type": "Government",
          "country_code": "USA",
          "abbrev": "NASA",
          "description": "The National Aeronautics and Space Administration is an independent agency of the executive branch of the United States federal government responsible for the civilian space program, as well as aeronautics and aerospace research. NASA have many launch facilities but most are inactive. The most commonly used pad will be LC-39B at Kennedy Space Center in Florida.",
          "administrator": "Administrator: Bill Nelson",
          "founding_year": "1958",
          "launchers": "Space Shuttle | SLS",
          "spacecraft": "Orion",
          "parent": null,
          "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_images/national2520aeronautics2520and2520space2520administration_image_20190207032448.jpeg"
        },
        "in_use": false,
        "capability": "Human transportation to upper Earth atmosphere and low Earth orbit.",
        "history": "The Mercury spacecraft was the manned capsule used for suborbital and orbital launches during the Project Mercury, the first human spaceflight program of the United States, from 1958 through 1963.",
        "details": "The Mercury spacecraft's principal designer was Maxime Faget, who started research for manned spaceflight during the time of the NACA. With 100 cubic feet (2.8 m3) of habitable volume, the capsule was just large enough for a single crew member. Inside were 120 controls: 55 electrical switches, 30 fuses and 35 mechanical levers. The heaviest spacecraft, Mercury-Atlas 9, weighed 3,000 pounds (1,400 kg) fully loaded. Its outer skin was made of René 41, a nickel alloy able to withstand high temperatures.",
        "maiden_flight": "1961-05-05",
        "height": 3.3,
        "diameter": 1.8,
        "human_rated": true,
        "crew_capacity": 1,
        "payload_capacity": null,
        "flight_life": "Between 15 minutes and 3 days.",
        "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/orbiter_images/mercury_image_20190207032519.jpeg",
        "nation_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_nation/mercury_image_20190207032519.png",
        "wiki_link": "https://en.wikipedia.org/wiki/Project_Mercury#Spacecraft",
        "info_link": ""
      },
      "flights": [
        {
          "id": 201,
          "url": "https://lldev.thespacedevs.com/2.2.0/spacecraft/flight/201/",
          "destination": "Suborbital",
          "mission_end": "1961-07-21T12:36:00Z",
          "spacecraft": {
            "id": 3,
            "url": "https://lldev.thespacedevs.com/2.2.0/spacecraft/3/",
            "name": "Mercury No.11",
            "serial_number": "11",
            "status": {
              "id": 4,
              "name": "Single Use"
            },
            "description": "Mercury No.11 is the Mercury capsule used for the Mercury-Redstone 4 - callsign \"Liberty Bell 7\" - mission launched on July 21, 1961 and piloted by astronaut Virgil \"Gus\" Grissom.",
            "spacecraft_config": {
              "id": 11,
              "url": "https://lldev.thespacedevs.com/2.2.0/config/spacecraft/11/",
              "name": "Mercury",
              "type": {
                "id": 1,
                "name": "Unknown"
              },
              "agency": {
                "id": 44,
                "url": "https://lldev.thespacedevs.com/2.2.0/agencies/44/",
                "name": "National Aeronautics and Space Administration",
                "type": "Government"
              },
              "in_use": false,
              "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/orbiter_images/mercury_image_20190207032519.jpeg"
            }
          },
          "launch": {
            "id": "4c732b42-e40e-4ee0-a917-bf427cea9f29",
            "url": "https://lldev.thespacedevs.com/2.2.0/launch/4c732b42-e40e-4ee0-a917-bf427cea9f29/",
            "slug": "redstone-mrlv-mercury-redstone-4",
            "name": "Redstone MRLV | Mercury-Redstone 4",
            "status": {
              "id": 3,
              "name": "Launch Successful",
              "abbrev": "Success",
              "description": "The launch vehicle successfully inserted its payload(s) into the target orbit(s)."
            },
            "last_updated": "2020-08-21T08:47:46Z",
            "net": "1961-07-21T12:20:00Z",
            "window_end": "1961-07-21T12:20:00Z",
            "window_start": "1961-07-21T12:20:00Z",
            "probability": -1,
            "holdreason": "",
            "failreason": "",
            "hashtag": null,
            "launch_service_provider": {
              "id": 44,
              "url": "https://lldev.thespacedevs.com/2.2.0/agencies/44/",
              "name": "National Aeronautics and Space Administration",
              "type": "Government"
            },
            "rocket": {
              "id": 2175,
              "configuration": {
                "id": 107,
                "url": "https://lldev.thespacedevs.com/2.2.0/config/launcher/107/",
                "name": "Redstone",
                "family": "Redstone",
                "full_name": "Redstone MRLV",
                "variant": "MRLV"
              }
            },
            "mission": {
              "id": 941,
              "name": "Mercury-Redstone 4",
              "description": "Mercury-Redstone 4 was the second United States human spaceflight, on July 21, 1961. The suborbital Project Mercury flight was launched with a Mercury-Redstone Launch Vehicle, MRLV-8. The spacecraft, Mercury capsule #11, was nicknamed the Liberty Bell 7, and it was piloted by the astronaut Virgil \"Gus\" Grissom.",
              "launch_designator": null,
              "type": "Human Exploration",
              "orbit": {
                "id": 15,
                "name": "Suborbital",
                "abbrev": "Sub"
              }
            },
            "pad": {
              "id": 89,
              "url": "https://lldev.thespacedevs.com/2.2.0/pad/89/",
              "agency_id": 44,
              "name": "Launch Complex 5",
              "info_url": null,
              "wiki_url": "https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station_Launch_Complex_5",
              "map_url": "https://www.google.com/maps?ll=28.439444,-80.573333&q=28.439444,-80.573333&hl=en&t=m&z=15",
              "latitude": "28.439444",
              "longitude": "-80.573333",
              "location": {
                "id": 12,
                "url": "https://lldev.thespacedevs.com/2.2.0/location/12/",
                "name": "Cape Canaveral, FL, USA",
                "country_code": "USA",
                "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_12_20200803142519.jpg",
                "total_launch_count": 831,
                "total_landing_count": 21
              },
              "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_89_20200803143242.jpg",
              "total_launch_count": 6
            },
            "webcast_live": false,
            "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/redstone_image_20190207032627.jpeg",
            "infographic": null,
            "program": [
              {
                "id": 2,
                "url": "https://lldev.thespacedevs.com/2.2.0/program/2/",
                "name": "Mercury",
                "description": "Project Mercury was the first human spaceflight program of the United States, running from 1958 through 1963.",
                "agencies": [
                  {
                    "id": 44,
                    "url": "https://lldev.thespacedevs.com/2.2.0/agencies/44/",
                    "name": "National Aeronautics and Space Administration",
                    "type": "Government"
                  }
                ],
                "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/project2520mer_program_20200820194755.png",
                "start_date": "1958-10-07T00:00:00Z",
                "end_date": "1963-05-16T23:24:02Z",
                "info_url": "https://www.nasa.gov/mission_pages/mercury/missions/program-toc.html",
                "wiki_url": "https://en.wikipedia.org/wiki/Project_Mercury",
                "mission_patches": []
              }
            ]
          }
        }
      ]
      }
  */
  launchers: `https://${env}.thespacedevs.com/2.2.0/launcher/?limit=105&offset=0`,
  /* RETURNS:
    {
      "count": 0,
      "next": "string",
      "previous": "string",
      "results": [
        {
          "id": 0,
          "url": "string",
          "flight_proven": true,
          "serial_number": "string",
          "status": "string",
          "details": "string",
          "launcher_config": {
            "id": 0,
            "url": "string",
            "name": "string",
            "family": "string",
            "full_name": "string",
            "variant": "string"
          },
          "image_url": "string",
          "flights": "string",
          "last_launch_date": "string",
          "first_launch_date": "string"
        }
      ]
    }
  */
  launcherSearch: `https://${env}.thespacedevs.com/2.2.0/launcher/?limit=100&offset=0&search=`,
  /* QUERYING B1035 RETURNS:
    {
      "count": 1,
      "next": null,
      "previous": null,
      "results": [
        {
          "id": 42,
          "url": "https://lldev.thespacedevs.com/2.2.0/launcher/42/",
          "flight_proven": true,
          "serial_number": "B1035",
          "status": "retired",
          "details": "Retired; permanently displayed at Space Center Houston.",
          "launcher_config": {
            "id": 55,
            "url": "https://lldev.thespacedevs.com/2.2.0/config/launcher/55/",
            "name": "Falcon 9",
            "family": "Falcon",
            "full_name": "Falcon 9 Full Thrust",
            "variant": "Full Thrust"
          },
          "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_core_images/42_image_20190226083209.jpeg",
          "flights": 2,
          "last_launch_date": "2017-12-15T15:36:09Z",
          "first_launch_date": "2017-06-03T21:07:38Z"
        }
      ]
    }
  */
  launcherID: `https://${env}.thespacedevs.com/2.2.0/launcher/`,
  /* ID OF 42 RETURNS:
    {
      "id": 42,
      "url": "https://lldev.thespacedevs.com/2.2.0/launcher/42/",
      "flight_proven": true,
      "serial_number": "B1035",
      "status": "retired",
      "details": "Retired; permanently displayed at Space Center Houston.",
      "launcher_config": {
        "id": 55,
        "url": "https://lldev.thespacedevs.com/2.2.0/config/launcher/55/",
        "name": "Falcon 9",
        "description": "The Full Thrust variants first stage includes all systems necessary for an operational re-use of stages while the second stage is operated as an expendable rocket stage.",
        "family": "Falcon",
        "full_name": "Falcon 9 Full Thrust",
        "manufacturer": {
          "id": 121,
          "url": "https://lldev.thespacedevs.com/2.2.0/agencies/121/",
          "name": "SpaceX",
          "featured": true,
          "type": "Commercial",
          "country_code": "USA",
          "abbrev": "SpX",
          "description": "Space Exploration Technologies Corp., known as SpaceX, is an American aerospace manufacturer and space transport services company headquartered in Hawthorne, California. It was founded in 2002 by entrepreneur Elon Musk with the goal of reducing space transportation costs and enabling the colonization of Mars. SpaceX has many pads, on the East Coast of the US they own SLC-40 at Cape Canaveral and LC-39A at the Kennedy Space Center for their lower inclination launches. They also own SLC-4E at Vandenberg, California for their high inclination launches. Another site is also being developed at Boca Chica, Texas.",
          "administrator": "CEO: Elon Musk",
          "founding_year": "2002",
          "launchers": "Falcon",
          "spacecraft": "Dragon",
          "launch_library_url": "https://launchlibrary.net/1.4/agency/121",
          "total_launch_count": 153,
          "consecutive_successful_launches": 23,
          "successful_launches": 143,
          "failed_launches": 9,
          "pending_launches": 48,
          "consecutive_successful_landings": 23,
          "successful_landings": 108,
          "failed_landings": 17,
          "attempted_landings": 126,
          "info_url": "http://www.spacex.com/",
          "wiki_url": "http://en.wikipedia.org/wiki/SpaceX",
          "logo_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/logo/spacex_logo_20191121063502.png",
          "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_images/spacex_image_20190207032501.jpeg",
          "nation_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_nation/spacex_nation_20190207032501.jpeg"
        },
        "program": [
          {
            "id": 11,
            "url": "https://lldev.thespacedevs.com/2.2.0/program/11/",
            "name": "Commercial Resupply Services",
            "description": "Commercial Resupply Services (CRS) are a series of flights awarded by NASA for the delivery of cargo and supplies to the International Space Station.The first CRS contracts were signed in 2008 and awarded $1.6 billion to SpaceX for twelve cargo Dragon and $1.9 billion to Orbital Sciences for eight Cygnus flights, covering deliveries to 2016. The Falcon 9 and Antares rockets were also developed under the CRS program to deliver cargo spacecraft to the ISS.",
            "agencies": [
              {
                "id": 44,
                "url": "https://lldev.thespacedevs.com/2.2.0/agencies/44/",
                "name": "National Aeronautics and Space Administration",
                "type": "Government"
              },
              {
                "id": 257,
                "url": "https://lldev.thespacedevs.com/2.2.0/agencies/257/",
                "name": "Northrop Grumman Innovation Systems",
                "type": "Commercial"
              },
              {
                "id": 1020,
                "url": "https://lldev.thespacedevs.com/2.2.0/agencies/1020/",
                "name": "Sierra Nevada Corporation",
                "type": "Commercial"
              },
              {
                "id": 121,
                "url": "https://lldev.thespacedevs.com/2.2.0/agencies/121/",
                "name": "SpaceX",
                "type": "Commercial"
              }
            ],
            "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/commercial2520_program_20201129212219.png",
            "start_date": "2008-12-23T00:00:00Z",
            "end_date": null,
            "info_url": null,
            "wiki_url": "https://en.wikipedia.org/wiki/Commercial_Resupply_Services#Commercial_Resupply_Services",
            "mission_patches": []
          }
        ],
        "variant": "Full Thrust",
        "alias": "",
        "min_stage": 2,
        "max_stage": 2,
        "length": 71,
        "diameter": 3.65,
        "maiden_flight": "2015-12-22",
        "launch_cost": "50,000,000",
        "launch_mass": 546,
        "leo_capacity": 22800,
        "gto_capacity": 8305,
        "to_thrust": 6804,
        "apogee": 200,
        "vehicle_range": null,
        "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/falcon252092520full2520thrust_image_20190222031117.jpeg",
        "info_url": "http://www.spacex.com/falcon9",
        "wiki_url": "https://en.wikipedia.org/wiki/Falcon_9",
        "total_launch_count": 25,
        "consecutive_successful_launches": 16,
        "successful_launches": 24,
        "failed_launches": 1,
        "pending_launches": 0
      },
      "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_core_images/42_image_20190226083209.jpeg",
      "successful_landings": 2,
      "attempted_landings": 2,
      "flights": 2,
      "last_launch_date": "2017-12-15T15:36:09Z",
      "first_launch_date": "2017-06-03T21:07:38Z"
    }
  */
}

export default endpoints;
