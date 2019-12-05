var geoPoint = require('geopoint');
var constants = require('./constant');

var calculateDistance = function(mainPoint,customerPoint){   
    var distance = mainPoint.distanceTo(customerPoint, true);
    return distance;
}

var convertDegreeToRadian = function(degree){
     degree = parseFloat(degree);
   return geoPoint.degreesToRadians(degree);
}

var getLocationPoint = function(location){
    let latitude = convertDegreeToRadian(location.latitude); //conversion to radians is done here
    let longitude = convertDegreeToRadian(location.longitude);
    return new geoPoint(latitude, longitude,true);
}

var getEligibleCustomers = function(customerData){
    let customers = [];
    let maxDistance = constants.DISTANCE;
    let mainLocation = {latitude:constants.DUBLIN_LATITUDE,longitude:constants.DUBLIN_LONGITUDE};
    let mainPoint = getLocationPoint(mainLocation);   //gets geo location point for dublin in radians
    for(let index=0;index<customerData.length;index++){
        var customerLocation = {latitude:customerData[index].latitude,longitude:customerData[index].longitude};
        let customerPoint = getLocationPoint(customerLocation); //gets geo location point for customer location radians
        let distance = calculateDistance(mainPoint,customerPoint); //gets the difference between the two in kms
        if(distance < maxDistance){
            customers.push({"user_id":customerData[index].user_id,"name":customerData[index].name});
        }
    }
    return customers;
}

module.exports={
    getEligibleCustomers:getEligibleCustomers
}