'use strict';


const customer = require('./customer');

var getEligibleCustomerList = function(){
    let customers = customer.getCustomersForInvitation();
    return customers;
}


module.exports={
    getEligibleCustomerList :getEligibleCustomerList
}

