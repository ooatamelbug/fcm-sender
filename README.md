# FCM Sender

FCM Sender is node js package to send notification to mobile app ( android and ios devices ) by node js 

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install FCM Sender.

```bash
npm install --save fcm-sender
```

## Usage

```javascript

const FCMSender = require('fcm-sender');
```

##Intialize 

```javascript

//put your firebase app key 
const intialFCM = new FCMSender('APA91bExJnQUo_83d24xB2ZsfYRX....');
```

##Set Data And Send

```javascript

//put your option in second step
const dataSendToSepicficMobil  = new FCMSender.sendForMobileToken({
    receivers : 'APNAPA91bE9kJIXCHe62jKDf....',
    notification : {
        title : 'notification title',
        body : 'notification message',
        image: 'url image',
    },
    data : {
        key : 'data'
    }
})

//send notification fire
dataSendToSepicficMobil.send();

```

##Options


Topic
send notification to all device by specific topic you can use sendForMobileTopic class

```javascript

const dataSendToSepicficMobil  = new FCMSender.sendForMobileTopic({
    topic : 'your topic hear', //topic that can recived notification 
    notification : {
        title : 'notification title',
        body : 'notification message',
        image: 'url image',
    },
    data : {
        key : 'data'
    }
})
```
in android handle

```Java Android

FirebaseMessaging.getInstance().subscribeToTopic("your-topic-hear")
```

in IOS handle

```Objective-C

[[FIRMessaging messaging] subscribeToTopic:@"your-topic-hear"
                                completion:^(NSError * _Nullable error) {
  NSLog(@"Subscribed to your topic");
}];
```

send to one device or group

```javascript

//code send to mobile
const dataSendToSepicficMobil  = new FCMSender.sendForMobileToken({
    receivers : 'APNAPA91bE9kJIXCHe62jKDf....', // the reciver mobile registeration token 
    notification : {
        title : 'notification title',
        body : 'notification message',
        image: 'url image',
    },
    data : {
        key : 'data'
    }
})
```

```javascript

{ receivers : 'APNAPSDA91bE9kJIXCHe62jKDf....'} //one decive
//Or 
{ receivers : ['AOPPNAPASD91bE9kJIXCHe62jKDf....','APIJK1bE9kJIMKXCHe62jKDf.....'] //for more divices or group }
```

##Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
