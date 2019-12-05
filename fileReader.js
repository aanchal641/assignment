const fs = require('fs');
var constants = require('./constant');

var getCustomerData = function(){
    let customers = [];
    if (fs.existsSync(constants.FILE_PATH)) {
    fs.readFileSync(constants.FILE_PATH, 'utf-8').split(/\r?\n/).forEach(function(customer) {
        customers.push(JSON.parse(customer));
    });
}
    return customers;
}


module.exports = {
    getCustomerData : getCustomerData
}