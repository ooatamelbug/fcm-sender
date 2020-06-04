//required fcm-sender
const FCMSender = require('./index');

//initalize fcm-sender
const initalFCM = new FCMSender('AfAZCrk3iSwcgmbEtUEODSKFJ0V-dAgctiDS_wQkgP0hGgs1..........');

//add payload
const dataSendToSepicficMobil = new FCMSender.sendForMobileToken(initalFCM,{
    receivers : '1bE9AFNA2jKDfAZCrKDFHxB2ZsfYRXxQVD...',
    notification : {
        title : 'app title',
        body : 'message',
        image: 'url image',
        sound : 'file name of sound file'
    },   
    data : {
        key : 'data'
    },
    "android":{
      "ttl":"86400s",
      "notification":{
        "click_action":"OPEN_ACTIVITY_1"
      }
    },
    "apns": {
      "headers": {
        "apns-priority": "5",
      },
      "payload": {
        "aps": {
          "category": "NEW_MESSAGE_CATEGORY"
        }
      }
    },
    "webpush":{
      "headers":{
        "TTL":"86400"
      }
    }
});

//send
dataSendToSepicficMobil.send();
