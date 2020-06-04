

const validateKey = (param,lengthParam)=>{
    if(typeof param != 'string'){
        throw new Error('key type is not valid');
    }

    if(param.toString().length < lengthParam){
        throw new Error('key is not valid');
    }

    return param.toString();
}



const validateMessage = (param)=>{
    if(param.receivers){
        if(typeof param.receivers != 'string' || typeof param.receivers != 'object'){
            throw new Error('receivers type is not valid');
        }
    }
    
    if(param.topic){
        if(typeof param.topic != 'string'){
            throw new Error('receivers type is not valid');
        }
    }
    
    if(typeof param.notification != 'object'){
        throw new Error('notification type is not valid');
    }
    
    if(param.data){
        if(typeof param.data != 'object'){
            throw new Error('data type is not valid');
        }
    }
    
    if(param.android){
        if(typeof param.android != 'object'){
            throw new Error('android type is not valid');
        }
    }

    if(param.apns){
        if(typeof param.apns != 'object'){
            throw new Error('data type is not valid');
        }
    }
    
    if(param.webpush){
        if(typeof param.webpush != 'object'){
            throw new Error('data type is not valid');
        }
    }

    return param;
}

exports.validation = {
    validateKey,
    validateMessage
};