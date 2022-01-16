// BY SETTING ENV TO THE VALUE BELOW
// THE DATA WILL BE STALE, BUT NO RATE LIMIT
const env = 'lldev';

// UNCOMMENT THE LINE BELOW TO USE LIVE DATA
// 15 req/hr && 300 req/day
// const env = 'll';

const endpoints = {
  spacecraft: `https://${env}.thespacedevs.com/2.2.0/swagger/spacecraft/`,
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
  craftSearch: `https://${env}.thespacedevs.com/2.2.0/swagger/spacecraft/?limit=1000&offset=0&search=`,
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

}
