"use strict";

const axios = require('axios');
const { validation } =require('./validations/valid');



class FCMSender {

    constructor(key){
        validation.validateKey(key,20);

        this.dataInital = {
            urlSender : 'https://fcm.googleapis.com/fcm/send'
        };
        this.dataHeaders = {
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `key=${key}`
            }
        };
        return this;
    }

}

FCMSender.sendForMobileToken = class {
    constructor(initalFCM,{receivers,notification,data,apns,android,webpush}){
        let args = arguments[1];
        validation.validateMessage(args)
        this.initalFCM = initalFCM;
        this.dataToSend = {
            to : receivers,
            notification: notification,
            data : data || null,
            apns : apns || null,
            android : android || null,
            webpush : webpush || null,
            priority : "high"
        };
    }
      
    send (){
        const morePayload = {
            "click_action": "OPEN_ACTIVITY_1",
            "content_available": true
        };

        this.dataToSend.notification = {...this.dataToSend.notification,...morePayload}
        
        if (this.dataToSend.to === null) {
            throw new Error('no one can recived this message please put token for user.');
        }

        return axios.post(this.initalFCM.dataInital.urlSender,this.dataToSend,this.initalFCM.dataHeaders)
        .then( dataCome =>{
            return dataCome.data;
        })
        .catch( err =>{
            throw new Error(err.response.statusText);
        })
    }
}

FCMSender.sendForMobileTopic = class {
    constructor(initalFCM,{topic,notification,data,apns,android,webpush}){
        let args = arguments[1];
        validation.validateMessage(args)
        this.initalFCM = initalFCM;
        this.dataToSend = {
            to : `/topics/${topic}`,
            notification: notification,
            data : data || null,
            apns : apns || null,
            android : android || null,
            webpush : webpush || null,
            priority : "high"
        };
    }
      
    send (){
        const morePayload = {
            "click_action": "OPEN_ACTIVITY_1",
            "content_available": true
        };

        this.dataToSend.notification = {...this.dataToSend.notification,...morePayload}
        
        if (this.dataToSend.to === null) {
            return new Error('no one can recived this message please put token for user.');
        }

        return axios.post(this.initalFCM.dataInital.urlSender,this.dataToSend,this.initalFCM.dataHeaders)
        .then( dataCome =>{
            return dataCome.data;
        })
        .catch( err =>{
            return err;
        })
    }
}

module.exports = FCMSender;

